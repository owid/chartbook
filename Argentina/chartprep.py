import re
import os
import pandas as pd

Country = re.search(
    "chartbook\/(.*)", os.path.dirname(os.path.realpath(__file__))
).group(1)
all_data = pd.read_csv("./raw_df.csv")
all_data["source_legend"] = (
    all_data["short_reference"] + " - " + all_data["welfare_concept"]
)
country_data = all_data.loc[(all_data["country"] == Country)]

final_series_list = list(
    country_data[
        (country_data["series_code"].str[0].isin(["F"]))
        & (country_data["preferred_definition"] == "*")
    ].series_code.unique()
)

i = 0
while i < len(final_series_list):
    final_series = final_series_list[i]
    dimension = (
        country_data.loc[(all_data["series_code"] == final_series)]
        .dimension.unique()
        .item()
    )

    sources_used = (
        country_data.loc[(all_data["series_code"] == final_series)]
        .source_codes_used.unique()
        .item()
        .split(",")
    )

    # construct json for final series
    final_series_df = country_data.loc[country_data["series_code"] == final_series]
    final_series_df["series"] = 0
    final_series_df = final_series_df.rename(columns={"year": "x", "value": "y"})
    values = final_series_df[["x", "y", "series"]].to_dict("records")
    data = [{"key": "Final series", "type": "line", "values": values, "yAxis": 1}]

    # construct json for source series
    j = 0
    while j < len(sources_used):
        source_series_df = country_data.loc[
            country_data["series_code"].isin(sources_used)
        ]
        source_series_df = source_series_df.loc[
            source_series_df["series_code"] == sources_used[j]
        ]
        source_series_df["series"] = j + 1
        source_series_df = source_series_df.rename(columns={"year": "x", "value": "y"})
        values = source_series_df[["x", "y", "series"]]
        values = values.to_dict("records")
        data.append(
            {
                "key": source_series_df["source_legend"].unique().item(),
                "type": "scatter",
                "values": values,
                "yAxis": 1,
            }
        )
        j += 1
    data = "$scope.data = " + str(data)

    # edit app.js
    with open("app.js", "r") as file:
        old_script = file.read()

    new_script = (
        re.sub("(?<=insert data\n).*", str(data), old_script)
        .replace("'key'", "key")
        .replace("'type'", "type")
        .replace("'values'", "values")
        .replace("'yAxis'", "yAxis")
    )

    open(final_series + " - " + dimension + ".js", "w").write(new_script)
    i += 1

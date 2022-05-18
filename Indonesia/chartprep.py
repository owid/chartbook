import re
import os
import pandas as pd

Country = re.search(
    "chartbook\/(.*)", os.path.dirname(os.path.realpath(__file__))
).group(1)
all_data = pd.read_csv("../raw_df.csv")
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

data_list = []
div_list = []

colour_dict = {
    "Earnings Dispersion": "#104E8B",
    "Overall Income Inequality": "#008000",
    "Poverty": "#e31a1c",
    "Wealth Inequality": "#FF9912",
    "Top Income Shares": "#6a3d9a",
}

i = 0
while i < len(final_series_list):
    final_series = final_series_list[i]
    dimension = (
        country_data.loc[(all_data["series_code"] == final_series)]
        .dimension.unique()
        .item()
    )

    measure = (
        country_data.loc[(all_data["series_code"] == final_series)]
        .measure.unique()
        .item()
    )

    welfare_concept = (
        country_data.loc[(all_data["series_code"] == final_series)]
        .welfare_concept.unique()
        .item()
    )

    description = (
        country_data.loc[(all_data["series_code"] == final_series)]
        .description.unique()
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
    df_max = max(final_series_df["x"])
    df_min = min(final_series_df["x"])
    values = final_series_df[["x", "y", "series"]]
    values = values.to_dict("records")
    data = [{"key": "Chartbook series", "type": "line", "values": values, "yAxis": 1}]
    div = []

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
        add = pd.DataFrame(
            [[df_min, "null", j + 1], [df_max, "null", j + 1]],
            columns=["x", "y", "series"],
        )
        values = (
            pd.concat([values, add]).sort_values(by=["x"]).drop_duplicates(subset=["x"])
        )
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
    data = "$scope.data" + str(i) + " = " + str(data)
    data_list.append(data)
    div = (
        "<h2 style='color:"
        + colour_dict[str(dimension)]
        + ";'>"
        + dimension
        + "</h2>\n<h3>"
        + measure
        + " - "
        + welfare_concept
        + "</h3>\n<p>"
        + description
        + "</p><h4>Visualization of source data</h4>\n"
        + "<nvd3 options='options' data='data"
        + str(i)
        + "'></nvd3>"
    )
    div_list.append(div)
    i += 1

string = (
    str("; \n".join(data_list))
    .replace("'null'", "null")
    .replace("'key'", "key")
    .replace("'type'", "type")
    .replace("'values'", "values")
    .replace("'yAxis'", "yAxis")
)

div_string = str("\n").join(div_list)
print(div_string)

# edit app.js
with open("../source_series_charts.js", "r") as file:
    old_script = file.read()
new_script = re.sub("(?<=insert data\n).*", string, old_script)
open("source_series_charts.js", "w").write(new_script)

# edit chart.html
with open("../chart.html", "r") as file:
    old_script = file.read()
new_script = re.sub("(<!-- insert country -->\n).*", Country, old_script)
new_script = re.sub("(?<=<!-- insert data -->\n).*", div_string, new_script)
open("chart.html", "w").write(new_script)

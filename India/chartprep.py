import re
import os
import pandas as pd

Country = re.search(
    "chartbook\/(.*)", os.path.dirname(os.path.realpath(__file__))
).group(1)
all_data = pd.read_csv("../raw_df.csv")
# assign legend
all_data["source_legend"] = (
    all_data["short_reference"] + " - " + all_data["welfare_concept"]
)
country_data = all_data.loc[(all_data["country"] == Country)]

# return list of all series that start with F (final series)
final_series_list = list(
    country_data[
        (country_data["series_code"].str[0].isin(["F"]))
        # & (country_data["preferred_definition"] == "*")
    ].series_code.unique()
)

data_list = []
div_list = []

# used for the colour of the subheadings
colour_dict = {
    "Earnings Dispersion": "#104E8B",
    "Overall Income Inequality": "#008000",
    "Poverty": "#e31a1c",
    "Wealth Inequality": "#FF9912",
    "Top Income Shares": "#6a3d9a",
}

# iterate through list of final series
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
    # for each final series, 'series' = 0 (required by chart js)
    final_series_df["series"] = 0
    final_series_df = final_series_df.rename(columns={"year": "x", "value": "y"})
    # assign max and min value for each series
    df_max = max(final_series_df["x"])
    df_min = min(final_series_df["x"])
    values = final_series_df[["x", "y", "series"]]
    # convert to dict
    values = values.to_dict("records")
    # create nested dict to fit required js format
    data = [{"key": "Chartbook series", "type": "line", "values": values, "yAxis": 1}]
    div = []

    # construct json for source series
    j = 0
    while j < len(sources_used):
        # create df of source series used
        source_series_df = country_data.loc[
            country_data["series_code"].isin(sources_used)
        ]
        # iterate through each source series
        source_series_df = source_series_df.loc[
            source_series_df["series_code"] == sources_used[j]
        ]
        # each source series has a unique 'series' value, starting from one (required by chart js)
        source_series_df["series"] = j + 1
        source_series_df = source_series_df.rename(columns={"year": "x", "value": "y"})
        values = source_series_df[["x", "y", "series"]]
        # add df_min and df_max of all values used to construct final series to each source series, in order to prevent zoom function
        add = pd.DataFrame(
            [[df_min, "null", j + 1], [df_max, "null", j + 1]],
            columns=["x", "y", "series"],
        )
        values = (
            pd.concat([values, add]).sort_values(by=["x"]).drop_duplicates(subset=["x"])
        )
        # convert to dict
        values = values.to_dict("records")
        # create nested dict and append
        data.append(
            {
                "key": source_series_df["source_legend"].unique().item(),
                "type": "scatter",
                "values": values,
                "yAxis": 1,
            }
        )
        j += 1
    # write string as it should appear in source_series_chart.js
    data = "$scope.data" + str(i) + " = " + str(data)
    data = data.replace("[", "[\n").replace("},", "},\n")

    # store string
    data_list.append(data)
    # create div of final series description as it should appear in chart.html
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
    # store div
    div_list.append(div)
    i += 1

# reformat to js
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

# edit chart.html - specify ED or no_ED
with open("../chart_no_ED.html", "r") as file:
    old_script = file.read()
new_script = re.sub("(<!-- insert country -->\n).*", Country, old_script)
new_script = re.sub("(?<=<!-- insert data -->\n).*", div_string, new_script)
open("chart.html", "w").write(new_script)

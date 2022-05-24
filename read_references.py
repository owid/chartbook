import csv
import pandas as pd
import re


references = """Argentina,https://docs.google.com/spreadsheets/d/1Dc8tx6cTio_AugopaxWkcUNKcp_bMEkwZZRmaZ-LkvQ/edit?usp=sharing
Australia,https://docs.google.com/spreadsheets/d/1_WIBAjDLO7ufWuBFhRFr-GMl6dLgLz47-uF5EvC48ZY/edit?usp=sharing
Brazil,https://docs.google.com/spreadsheets/d/1IaA-lvbRlixYMLy5nW6xxJolaZyO4DK_0XvLQuLjJJs/edit?usp=sharing
Canada,https://docs.google.com/spreadsheets/d/1zxuxAXriOrp0x_dxklVbULKGqG3fEOGBkouUNWx7AY8/edit?usp=sharing
Finland,https://docs.google.com/spreadsheets/d/1ZakjK-hP6s4tLJZCEFjR7NVVqTkb6AXwgpvfpSwsT-I/edit?usp=sharing
France,https://docs.google.com/spreadsheets/d/1sySmwtRs_MvRrcVj52o9b0nG-bzbPMu1haIoSK8IWqk/edit?usp=sharing
Germany,https://docs.google.com/spreadsheets/d/1g8gGUHRye1L7hEu3HqYgM56RvjHrc3LD85kBwRZcYj4/edit?usp=sharing
Iceland,https://docs.google.com/spreadsheets/d/1YP9WzHiFVPZLLZ91_bMNa-EzrCy9ME_5nmDUZu7SN4A/edit?usp=sharing
India,https://docs.google.com/spreadsheets/d/1hyXWzYakYa8NKYHVIvEqjAvV9YeVti4gOxJkT4UqSlI/edit?usp=sharing
Indonesia,https://docs.google.com/spreadsheets/d/1A6HH3eHNo2ubWGe6XisQFINtnGcE9d1WmCCHRYGSe8M/edit?usp=sharing
Italy,https://docs.google.com/spreadsheets/d/1ovdfVn5BJymTzItKbZsvyt6qDjPoKsVLST23lms_1qc/edit#gid=1830755962
Japan,https://docs.google.com/spreadsheets/d/1pwS0793rjAZNcVHf4EbrpIGXBGo8C74oP7p0A9H3HXA/edit?usp=sharing
Malaysia,https://docs.google.com/spreadsheets/d/1DOyjueTHGkWQ8-0skJ5c5_tO8x6y4mbUCPp5nhRR30I/edit?usp=sharing
Mauritius,https://docs.google.com/spreadsheets/d/1_T_B9cGEGdKX6zNsh3cIUg_dzUlpoJ98oSPOKg7ga7Q/edit?usp=sharing
Netherlands,https://docs.google.com/spreadsheets/d/1L_0W3MMKbvcAIOiFGZTkQOcar7JUkzgVgbH0RnMAkag/edit?usp=sharing
New Zealand,https://docs.google.com/spreadsheets/d/1-ncVJ4sUG8j_5ThnN3_T9wzWdbo26pr1rYy5xDJF0f4/edit#gid=1830755962
Norway,https://docs.google.com/spreadsheets/d/1SNMeX0RWQE-rTkj3rAxK6uZQmQaqa2pr2QFP5wW2kb0/edit#gid=1830755962
Portugal,https://docs.google.com/spreadsheets/d/1EdqTg2eDWQZOcuKY-LCNkNwOcrgIFVpl3MxVNIjYhLU/edit?usp=sharing
Singapore,https://docs.google.com/spreadsheets/d/1tkNPvqgSfkPdyvRR8GPLkYOVkzNesPKyPFXTiWhT2H0/edit?usp=sharing
South Africa,https://docs.google.com/spreadsheets/d/1DG9yxRwQ2QcCOiUU0_u-YqGOtALMNvBboywp9t6tl0I/edit?usp=sharing
Spain,https://docs.google.com/spreadsheets/d/1xXFMMP4glUrPevj4-rW04mqKQj8ebPAiP2tKNx8l6QA/edit?usp=sharing
Sweden,https://docs.google.com/spreadsheets/d/1Ylee87yl-XL1PMeK9LMgLK5NkIxe5cmb7PdC53AoMWM/edit?usp=sharing
Switzerland,https://docs.google.com/spreadsheets/d/1NXeIVqzbCAUGE6KpGLURIDVKUxXK8qBWOWfuo9Wn1Os/edit?usp=sharing
UK,https://docs.google.com/spreadsheets/d/1qa1LD_R9F3hdnVcbo-MB6mAMoBOG-IcnSypQXzCeMj0/edit?usp=sharing
US,https://docs.google.com/spreadsheets/d/1ONdnOFLa-SxtMe3uxtv1J3hZY16Li9mBf9Oi2gE4YwI/edit?usp=sharing"""

lines = references.splitlines()
reader = csv.reader(lines)
references = list(reader)

ref_list = []

for i in references:
    print(i[0])
    url = re.sub("\/edit.*", "/gviz/tq?tqx=out:csv&sheet=References", i[1])
    refs = pd.read_csv(url)
    refs["Country"] = i[0]

    x = 0
    html_string = ""
    li = ""
    while x < len(refs):
        ref_list.append(refs.iloc[x])
        li = (
            str("<li><a href = '")
            + str(refs.iloc[x]["Reference URL"])
            + str("'>")
            + str(refs.iloc[x]["Reference"])
            + str("</a></li>\n")
        )
        if not li:
            break
        html_string += li
        x += 1

    html_string = re.sub("<a href = 'nan'>", "", html_string)
    html_string = "</div>\n" + html_string + "</body>"

    with open(str(i[0]) + "/chart.html", "r") as file:
        old_script = file.read()
    new_script = re.sub("<\/nvd3>\n.*<\/div>((.|\n)*)<\/body>", html_string, old_script)
    open(str(i[0]) + "/chart.html", "w").write(new_script)


pd.DataFrame(ref_list)[["Country", "Reference", "Reference URL"]].to_csv(
    "References.csv", index=False, sep=","
)

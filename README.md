# Chartbook of Economic Inequality

Install packages

```
pip install -r requirements.txt
```

Populate the chart datasets and produce HTML from template for each country. Select country on line 17.

```sh
Rscript dataprep.R
```

Render HTML file in browser local port


```sh
python -m http.server
```

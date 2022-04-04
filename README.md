# Chartbook of Economic Inequality

Instructions on how to set up a local server to see the charts (we assume that you have Python installed on your machine)

Clone the repository into current working directory

```
git clone https://github.com/owid/chartbook.git
```

Create a virtual environment and activate

```
python3 -m venv venv
source venv/bin/activate
```

Install necessary packages

```
pip install -r requirements.txt
```

Populate the chart datasets for each country

```sh
cd COUNTRY
Rscript dataprep.R
```

To edit specific chart dimensions, open chartbook.html within the country's folder; lines marked with '// XXX' can be edited

Render HTML file in browser local port

```sh
python -m http.server
```

Open your browser and enter http://localhost:8000/

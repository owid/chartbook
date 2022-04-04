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

Render HTML file in browser local port


```sh
python -m http.server
```

Open your browser and enter http://localhost:8000/

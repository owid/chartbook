To start:

Rproj file created
```sh
cd UK
rproj R
open R.Rproj
```

```sh
mkdir R

```


Python modifications

Wrote requirements.txt file...

```sh
cd UK
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
python UK/load_earnings_dispersion_data.py
```


Sam's new branch
```
git checkout -b srhoads
## to switch to it when currently in another branch
git branch srhoads
```


Maintenance/moving files:
- Copied the HTML file to the top directory
```sh
cp "UK/UK_Chartbook_new.html" "chartbook.html"
```
- Move token.json file to top level directory.
- Best to also move the .gitignore, requirements.txt, README-R.md, venv/, R.Rproj, etc... files & folders to the top level too.
- And supporting plotting files...
```r
plotting_files_to_copy <- list.files(path="UK", pattern="\\.(js|css|json)", recursive=F, full.names=T)
file.copy(plotting_files_to_copy, gsub("UK\\/", "", plotting_files_to_copy))
```

Running the dataprep code
```
RScript dataprep_1.R
```





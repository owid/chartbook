#TO RUN THIS FILE FROM TERMINAL: {RScript dataprep_1.R}
PKG="tidyverse"; if(!PKG %in% installed.packages()){install.packages(PKG)}; do.call(library, list(PKG))
PKG="magrittr"; if(!PKG %in% installed.packages()){install.packages(PKG)}; do.call(library, list(PKG))
PKG="janitor"; if(!PKG %in% installed.packages()){install.packages(PKG)}; do.call(library, list(PKG))


#### Script to pull data directly from gsheet 
# try({if(!dir.exists("venv")){system("virtualenv venv")}})
# try({system("source venv/bin/activate && pip install -r requirements.txt")})
# system("python get_googlesheets_data.py")

raw_df <- readr::read_csv("raw_df.csv") %>% janitor::clean_names()
COUNTRIES <- sort(unique(raw_df$country))

# lod_1 <- list()
# for(COUNTRY in COUNTRIES){
list_1 <- lapply(COUNTRIES, function(COUNTRY){ #{COUNTRY="Australia"}
    cat(paste0("\nProcessing data for", " ", COUNTRY))
    dir.create(COUNTRY)
    file.copy("raw_df.csv", paste0(COUNTRY, "/", "raw_df.csv"), overwrite=T)
    country_df <- raw_df %>% 
        filter(country %in% c(COUNTRY)) %>% filter(!is.na(description), description!="")
    DIMENSIONS <- sort(unique(country_df$dimension))
    # lapply(DIMENSIONS, function(DIMENSION){
    #     country_df %>% filter(dimension %in% DIMENSION)
    # })
##if there are multiple series for one dimension, this block currently collapses them into one column and you have to manually separate them
    country_dimension_lod <- country_df %>% split(., .[["dimension"]]) %>%
        lapply(., function(df){ 
            if(any(df$dimension=="Earnings Dispersion")){
                newvaluecolname <- df %>% unite(., "newcol", one_of("dimension", "welfare_concept"), sep=" - ", na.rm=T, remove = T) %>% select(newcol) %>% distinct() %>% .[[1]] %>% .[[1]]
                df <- df %>%
                    select(one_of("year", "value")) %>%
                    setNames(recode(names(.), "value"=newvaluecolname))
                readr::write_csv(df, paste0(COUNTRY, "/top_chart.csv"))
            }
            df
        })
    LH_lod <- country_dimension_lod[names(country_dimension_lod)!="Earnings Dispersion"] %>%
        lapply(., function(d){
            d <- filter(d, preferred_definition=="*")
            tryCatch({
                newvaluecolname <- d %>% unite(., "newcol", one_of("dimension", "welfare_concept"), sep=" - ", na.rm=T, remove = T) %>% select(newcol) %>% distinct() %>% .[[1]] %>% .[[1]]
            d %>% select(one_of("year", "value")) %>%
                setNames(recode(names(.), "value"=newvaluecolname))},
            error=function(e){d})
        })
        df <- plyr::join_all(LH_lod, type="full")
        df <- df[order(df$year),]
        readr::write_csv(df, paste0(COUNTRY, "/", "bottom_chart.csv"))
        
#Copy chartbook.html
    #  if(modify_html<-T){
    #     mainfile <- "chartbook.html"
    #     newfile <- paste0(COUNTRY, "/", mainfile)
    #     file.copy(mainfile, newfile, overwrite=T)
    #     format_files_to_copy <- list.files(pattern="\\.(js|css)$", recursive=F, full.names=F)
    #     file.copy(format_files_to_copy, paste0(COUNTRY, "/", format_files_to_copy))
    #     newfilelines <- readLines(newfile)
        
    #     PATTERN="change_country"
    #     country_linenums <- newfilelines %>% grep(PATTERN, .)
    #     for(i in country_linenums){
    #         # linetoeditcon <- readLines(newfile, -1)
    #         newfilelines[i] <- gsub(PATTERN, COUNTRY, newfilelines[i])
    #         # writeLines(newfilelines,newfile)
    #     }
    #     PATTERN="Earnings Dispersion\\.csv"
    #     for(i in grep(PATTERN, newfilelines)){
    #         newfilelines[i] <- gsub(PATTERN, "top_chart.csv", newfilelines[i])
    #     }
    #     PATTERN="series\\/"
    #     for(i in grep(PATTERN, newfilelines)){
    #         newfilelines[i] <- gsub(PATTERN, "", newfilelines[i])
    #         # newfilelines[i] <- gsub(PATTERN, paste0(COUNTRY, "/"), newfilelines[i])
    #     }
    #     PATTERN="All_data"
    #     for(i in grep(PATTERN, newfilelines)){
    #         newfilelines[i] <- gsub(PATTERN, "raw_df", newfilelines[i])
    #     }
        
    #     # for(PATTERN in c("UK|United Kingdom", "Earnings Dispersion", "series\\/", "All_data")){}
        
    #     writeLines(newfilelines,newfile)
        
    #     # All_data.csv
    #     # Earnings Dispersion.csv
    #     # Overall Income Inequality - Equivalised disposable household income.csv
    #     # Overall Income Inequality - Income (tax units).csv
    #     # Poverty - Equivalised disposable household income.csv
    #     # Top Income Shares - Pre-tax national income (equal-split adults).csv
    #     # UK_LH.csv
    #     # 
    #     # # writeLines()
    #     # latin = readLines("junk.txt",-1)
    #     # latin[3]="per ardua ad astra"
    #     # writeLines(latin,"junkout.txt")
    #     # # iocon <- file(mainfile,"r+")
    #     # # header <- readLines(iocon,n=1)
    #     # # header <- gsub('DOC', 'SAM', header)
    #     # # writeLines(header, con=iocon)
    # }
    
    country_dimension_lod
}) %>%
    setNames(COUNTRIES)

list_1

#if earnings dispersions exists, write a file for that in a directory for the country
#

# country = input("Enter country: ")
# 
# df = dfObj[dfObj["country"] == country]
# df = df[df["dimension"] == "Earnings Dispersion"]
# df = df[df["description"] != ""]
# 
# final = df.filter(["year", "value"])
# 
# measure = df["measure"].values[1]
# final = final.rename(columns={"value": measure})
# final.reset_index(drop=True, inplace=True)
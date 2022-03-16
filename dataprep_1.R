#TO RUN THIS FILE FROM TERMINAL: {RScript dataprep_1.R}
PKG="tidyverse"; if(!PKG %in% installed.packages()){install.packages(PKG)}; do.call(library, list(PKG))
PKG="magrittr"; if(!PKG %in% installed.packages()){install.packages(PKG)}; do.call(library, list(PKG))
PKG="janitor"; if(!PKG %in% installed.packages()){install.packages(PKG)}; do.call(library, list(PKG))

try({if(!dir.exists("venv")){system("virtualenv venv")}})
try({system("source venv/bin/activate && pip install -r requirements.txt")})
system("python get_googlesheets_data.py")

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
        df <- plyr::join_all(LH_lod)
        readr::write_csv(df, paste0(COUNTRY, "/", "bottom_chart.csv"))
        
    # country_df %>% 
    #     filter(legend %in% c("Gini coefficient - Equivalised disposable household income", "Gini coefficient - Income (tax units)", "Share below 60% median", "Wealth Inequality", "Top Income Shares"))
    
    # {readr::read_csv("/Users/rhoadss/srhoads/cam/chartbook/UK/series/UK_LH.csv") %>% slice(-(1:110)) %>% datapasta::df_paste()}
    # if(TEMP<-T){
    #     LH_temp_df <- tibble(
    #     year = c(2010,2011,
    #              2012,2013,2014,
    #              2015,2016,2017,
    #              2018,2019,2020,2021),
    #     `Gini coefficient - Equivalised disposable household income` = c(33.71587,
    #                                                                      34.00962,33.63875,
    #                                                                      34.25986,33.94323,
    #                                                                      34.68564,33.65,
    #                                                                      34.20763,35.04541,
    #                                                                      35.17274,NA,NA),
    #     `Gini coefficient - Income (tax units)` = c(NA,NA,NA,
    #                                                 NA,NA,NA,NA,NA,
    #                                                 NA,NA,NA,NA),
    #     `Share below 60% median` = c(15.92449047,15.75767364,
    #                                  15.43336331,15.2656601,
    #                                  15.9083579,
    #                                  16.31999248,16.22156218,
    #                                  17.16024766,NA,NA,
    #                                  NA,NA),
    #     `Wealth Inequality` = c(NA,NA,
    #                             19.88,NA,NA,NA,NA,
    #                             NA,NA,NA,NA,NA),
    #     `Top Income Shares` = c(12.15,
    #                             13.02,12.63,13.69,
    #                             13.23,12.25,12.41,
    #                             13.3,12.96,12.6,
    #                             12.65,12.65)
    # )
    #     
    #     readr::write_csv(LH_temp_df, paste0(COUNTRY, "/", COUNTRY, "_LH.csv"))
    #     }
     if(modify_html<-T){
        mainfile <- "chartbook.html"
        newfile <- paste0(COUNTRY, "/", mainfile)
        file.copy(mainfile, newfile, overwrite=T)
        format_files_to_copy <- list.files(pattern="\\.(js|css)$", recursive=F, full.names=F)
        file.copy(format_files_to_copy, paste0(COUNTRY, "/", format_files_to_copy))
        newfilelines <- readLines(newfile)
        
        PATTERN="change_country"
        country_linenums <- newfilelines %>% grep(PATTERN, .)
        for(i in country_linenums){
            # linetoeditcon <- readLines(newfile, -1)
            newfilelines[i] <- gsub(PATTERN, COUNTRY, newfilelines[i])
            # writeLines(newfilelines,newfile)
        }
        PATTERN="Earnings Dispersion\\.csv"
        for(i in grep(PATTERN, newfilelines)){
            newfilelines[i] <- gsub(PATTERN, "top_chart.csv", newfilelines[i])
        }
        PATTERN="series\\/"
        for(i in grep(PATTERN, newfilelines)){
            newfilelines[i] <- gsub(PATTERN, "", newfilelines[i])
            # newfilelines[i] <- gsub(PATTERN, paste0(COUNTRY, "/"), newfilelines[i])
        }
        PATTERN="All_data"
        for(i in grep(PATTERN, newfilelines)){
            newfilelines[i] <- gsub(PATTERN, "raw_df", newfilelines[i])
        }
        
        # for(PATTERN in c("UK|United Kingdom", "Earnings Dispersion", "series\\/", "All_data")){}
        
        writeLines(newfilelines,newfile)
        
        # All_data.csv
        # Earnings Dispersion.csv
        # Overall Income Inequality - Equivalised disposable household income.csv
        # Overall Income Inequality - Income (tax units).csv
        # Poverty - Equivalised disposable household income.csv
        # Top Income Shares - Pre-tax national income (equal-split adults).csv
        # UK_LH.csv
        # 
        # # writeLines()
        # latin = readLines("junk.txt",-1)
        # latin[3]="per ardua ad astra"
        # writeLines(latin,"junkout.txt")
        # # iocon <- file(mainfile,"r+")
        # # header <- readLines(iocon,n=1)
        # # header <- gsub('DOC', 'SAM', header)
        # # writeLines(header, con=iocon)
    }
    # lapply(unique(names(country_dimension_lod)), function(DIMENSION){
    # })
    # return(country_dimension_df)
    # # country_df %>% filter_if(is.character, any_vars(grepl("Earning.*Disp", ., ignore.case=T)))
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
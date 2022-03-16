PKG="tidyverse"; if(!PKG %in% installed.packages()){install.packages(PKG)}; do.call(library, list(PKG))
PKG="magrittr"; if(!PKG %in% installed.packages()){install.packages(PKG)}; do.call(library, list(PKG))
PKG="janitor"; if(!PKG %in% installed.packages()){install.packages(PKG)}; do.call(library, list(PKG))

system("python get_googlesheets_data.py")

raw_df <- readr::read_csv("raw_df.csv") %>% janitor::clean_names()
COUNTRIES <- sort(unique(raw_df$country))

# lod_1 <- list()
# for(COUNTRY in COUNTRIES){
list_1 <- lapply(COUNTRIES, function(COUNTRY){
    cat(paste0("\nProcessing data for", " ", COUNTRY))
    country_df <- raw_df %>% 
        filter(country %in% c(COUNTRY)) %>% 
        filter(!is.na(description), description!="")
    DIMENSIONS <- sort(unique(country_df$dimension))
    # lapply(DIMENSIONS, function(DIMENSION){
    #     country_df %>% filter(dimension %in% DIMENSION)
    # })
    country_dimension_df <- country_df %>% split(., .[["dimension"]])
    return(country_dimension_df)
    # country_df %>% filter_if(is.character, any_vars(grepl("Earning.*Disp", ., ignore.case=T)))
    # lod_1[COUNTRY] <- country_df
}) %>%
    setNames(COUNTRIES)

list_1
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
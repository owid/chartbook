PKG <- "tidyverse"
if (!PKG %in% installed.packages()) {
  install.packages(PKG)
}
do.call(library, list(PKG))
PKG <- "magrittr"
if (!PKG %in% installed.packages()) {
  install.packages(PKG)
}
do.call(library, list(PKG))
PKG <- "janitor"
if (!PKG %in% installed.packages()) {
  install.packages(PKG)
}
do.call(library, list(PKG))

raw_df <- readr::read_csv("../raw_df.csv") %>% janitor::clean_names()

COUNTRY <- gsub(paste0(dirname(getwd()), "/"), "", getwd())

country_df <- raw_df %>%
  filter(country %in% c(COUNTRY)) %>%
  filter(!is.na(description), description != "")

LH_lod <- country_df %>%
  split(., .[["series_code"]]) %>%
  lapply(., function(d) {
    d <- filter(d, preferred_definition == "*")
    tryCatch(
      {
        newvaluecolname <- d %>%
          unite(., "newcol", one_of("series_code", "dimension"), sep = " - ", na.rm = T, remove = T) %>%
          select(newcol) %>%
          distinct() %>%
          .[[1]] %>%
          .[[1]]
        d %>%
          select(one_of("year", "value")) %>%
          setNames(recode(names(.), "value" = newvaluecolname))
      },
      error = function(e) {
        d
      }
    )
  })
df <- plyr::join_all(LH_lod, type = "full")
df <- df[order(df$year), ]
df <- df[substr(names(df), 0, 1) == "F" | names(df) == "year"]
readr::write_csv(df, "bottom_chart.csv")
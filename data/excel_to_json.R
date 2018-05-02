# excel_to_json.R
# convert the LAPD scorecard data from excel to JSON format
# Adam Scherling
# May 2, 2018

# load necessary libraries
library(readxl)
library(jsonlite)

# change to the directory with the data
setwd('~/github/lapz-scorecard/data')

# custom function for reading in the data, just to make things cleaner
# read in each sheet by name, and only take the first two columns
read_data <- function(data_name) {
	x <- read_excel('lapz-scorecard.xlsx', range=cell_cols("A:B"), sheet=data_name)
	x <- data.frame(x)
	return(x)
}

# save the data to a list
data <- list()

data$Descriptions <- data.frame(read_excel('lapz-scorecard.xlsx', range=cell_cols("A:M"), sheet="Descriptions"))
data$Poverty <- read_data("Poverty")
data$Jobs <- read_data("Jobs")
data$Permits <- read_data("Permits")
data$Math <- read_data("Math")
data$English <- read_data("English")
data$Graduation <- read_data("Graduation")
data$College <- read_data("College")
data$RentBurden <- read_data("RentBurden")
data$Homeless <- read_data("Homeless")
data$CleanStreets <- read_data("CleanStreets")
data$Collisions <- read_data("Collisions")
data$Part1Crimes <- read_data("Part1Crimes")
data$Part2Crimes <- read_data("Part2Crimes")

# write to JSON format
write_json(data, 'lapz-scorecard.JSON')


import axios from "axios";

export function getRentalCars(input, nrOfRequiredResults) {
    const URL = "https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en";
    return axios.get(URL, {
        params: {
            solrTerm: input,
            solrRows: nrOfRequiredResults,
        }
    })
}
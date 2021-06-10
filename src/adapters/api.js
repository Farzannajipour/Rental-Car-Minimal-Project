import axios from "axios";

export function getRentalCars( input, nrOfRequiredResults ) {
    const URL = "https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en";
    const cancelTokenSource = axios.CancelToken.source();
    return axios.get( URL, {
        cancelToken: cancelTokenSource.token,
        params: {
            solrTerm: input,
            solrRows: nrOfRequiredResults,
        }
    } ).catch( function ( err ) {
        if (axios.isCancel( err )) {
            console.log( 'Previous request canceled, new request is send', err.message );
        } else {
            // handle error
        }
    } );
}

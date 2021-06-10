import React from 'react';
import Box from '@material-ui/core/Box';
import SearchBox from "./search-box/search-box";
import Result from "./results/results";


export default function RentalCar() {
    return (
        <div>
            <Box display="flex" flexDirection="column" justifyContent="space-around" alignItems="flex-start"
                 height="100%">
                {/* TOP HALF */ }
                <Box display="flex" bgcolor="secondary.main"/>
                {/* BOTTOM HALF */ }
                <Box display="flex" flexWrap="wrap" bgcolor="secondary.main" borderRadius={ 10 } width="100%">
                    {/*<SearchBox/>*/ }
                    <SearchBox/>
                </Box>
            </Box>
            <Result/>
        </div>

    );
}

import React from 'react';
import Box from '@material-ui/core/Box';
import SearchBox from "./search-box/search-box";
import Result from "./results/results";


export default function RentalCar() {
    return (
        <div>
            <Box
                height="100%">
                {/* BOTTOM HALF */ }
                <Box display="flex" flexWrap="wrap" bgcolor="secondary.main"
                     borderRadius={ 10 } width="100%" marginTop="35vh">
                    <SearchBox/>
                </Box>
            </Box>
            <Result/>
        </div>

    );
}

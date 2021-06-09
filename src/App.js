import React, { useEffect, useState } from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Box } from "@material-ui/core";


import SearchBox from "./components/rental-car/search-box/search-box";
import RentalCar from './components/rental-car/rental-car';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './constants';
import { useStateValue } from './contexts/states';

const theme = createMuiTheme( {
    palette: {
        primary: {
            main: PRIMARY_COLOR,
        },
        secondary: {
            main: SECONDARY_COLOR,
        },
        custom: {
            btn: "#fff"
        }
    },
} );


function App() {

    return (
        <ThemeProvider theme={ theme }>
            <Box display="flex" bgcolor="primary.main" minHeight="50vh">
                <Container maxWidth="md">
                    <Box display="flex" flexDirection="column" justifyContent="space-around" alignItems="flex-start"
                         height="100%">
                        {/* TOP HALF */ }
                        <Box display="flex" bgcolor="secondary.main" width="100%">

                        </Box>
                        {/* BOTTOM HALF */ }
                        <Box display="flex" bgcolor="secondary.main" borderRadius={ 10 } width="100%">
                            {/*<SearchBox/>*/ }
                            <SearchBox/>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default App;

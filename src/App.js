import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Box } from "@material-ui/core";


import RentalCar from './components/rental-car/rental-car';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './constants';

import React from "react";

const theme = createMuiTheme( {
    palette: {
        primary: {
            main: PRIMARY_COLOR,
        },
        secondary: {
            main: SECONDARY_COLOR,
        },
        custom: {
            btn: "#fff",
            color: "#fff"
        }
    },
} );


function App() {

    return (
        <ThemeProvider theme={ theme }>
            <Box display="flex" bgcolor="primary.main" minHeight="100vh">
                <Container maxWidth="md">
                    <RentalCar/>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default App;

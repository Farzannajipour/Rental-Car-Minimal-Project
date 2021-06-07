import Main from './components/main';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './constants';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import SearchBox from "./components/searchbox";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from '@material-ui/core/Container';
import { Box } from "@material-ui/core";

const theme = createMuiTheme( {
    palette: {
        primary: {
            main: PRIMARY_COLOR,
        },
        secondary: {
            main: SECONDARY_COLOR,
        },
    },
} );


function App() {
    const [ users, setUsers ] = useState( [] );
    const [ text, setText ] = useState( '' );
    const [ suggestions, setSuggestions ] = useState( [] );
    useEffect( () => {
        const loadUsers = async () => {
            const response = await axios.get( 'https://www.rentalcars.com/LocationAutocomplete.do?domain=rc.com&cor=NL&preflang=nl&term=ams' );
            console.log( response.data.results.docs );
            setUsers( response.data.results.docs )
        }
        loadUsers()
    }, [] );
    const onSuggestHandler = (text) => {
        setText(text);
        setSuggestions([]);
    }
    const onChangeHandler = ( text ) => {
        let matches = [];
        if (text.length > 0) {
            matches = users.filter(user => {
                const regex = new RegExp(`${text}`,"gi");
                return user.email.match(regex);
            })
        }
        console.log(matches);
        setSuggestions(matches);
        setText( text )
    }
    return (
        <ThemeProvider theme={ theme }>
            <Container maxWidth="sm">
                <Box width={1} className="menu">

                </Box>
            </Container>
            {/*<div>{ text }</div>*/}
            {/*<input type="text" onChange={ e => onChangeHandler( e.target.value ) }*/}
            {/*       value={ text } className="col-md-12 input" style={ { marginTop: 10 } }/>*/}
            {/*{suggestions && suggestions.map((suggestion, i) =>*/}
            {/*    <div key={i}*/}
            {/*         onClick={() => onSuggestHandler(suggestion.email)}*/}
            {/*         onBlur={() => {*/}
            {/*             setTimeout(() => {*/}
            {/*                 setSuggestions([])*/}
            {/*             }, 100)*/}
            {/*         }}*/}
            {/*         className="col-md-12 suggestion justify-content-center"> {suggestion.email} </div>*/}
            {/*)}*/}
            {/*<SearchBox/>*/ }
            {/*<Main/>*/ }
        </ThemeProvider>
    )
}

export default App;

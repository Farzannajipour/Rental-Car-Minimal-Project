import React, { useEffect, useState } from 'react';
import { getRentalCars } from "../../../adapters/api"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from "../../../contexts/states";
import { MINIMUM_REQUIRED_INPUT_LENGTH, UPDATE_RENTAL_CAR_RESULTS } from '../../../constants';

const useStyles = makeStyles( ( theme ) => ( {
    textField: {
        backgroundColor: "#fff",
        margin: theme.spacing( 3 ),
        border: "none",
        borderRadius: "10px"
    },
    input: {
        color: 'white'
    }
} ) );


export default function SearchBox() {
    const [ text, setText ] = useState( '' );

    const [ states, dispatch ] = useStateValue();

    function updateResults( newResults ) {
        dispatch( {
            type: UPDATE_RENTAL_CAR_RESULTS,
            value: newResults
        } )
    }

    // useEffect( () => {
    //     fetchRentalCarsByInput( text );
    // }, [ text ] );
    const onChangeHandler = ( newValue ) => {
        if (shouldFetchRentalCars( newValue )) {
            getRentalCars( newValue, MINIMUM_REQUIRED_INPUT_LENGTH )
                .then( ( response ) => updateResults( response.data.results.docs ) )
                .catch( ( error ) => {
                    console.error( error );
                    return [];
                } );
        }


        // let matches = [];
        // if (newValue.length > 0) {
        //     matches = users.filter(user => {
        //         const regex = new RegExp(`${text}`,"gi");
        //         return user.email.match(regex);
        //     })
        // }
        // console.log(matches);
        // setSuggestions(matches);
        setText( newValue )
    };
    const classes = useStyles();
    return (
        <React.Fragment>
            {/*<input type="text" placeholder="Pick-up location:" onChange={ e => onChangeHandler( e.target.value ) }*/ }
            {/*       width="50%"*/ }
            {/*       value={ text } className="col-md-12 input" style={ { margin: 10 } }/>*/ }
            <TextField
                id="input-with-icon-textfield"
                onChange={ e => onChangeHandler( e.target.value ) }
                value={ text }
                variant="filled"
                className={ classes.textField }
                fullWidth
                InputLabelProps={ {
                    shrink: true,
                } }
                label="Pick-up location:"
                InputProps={ {
                    startAdornment: (
                        <InputAdornment position="start">
                            <LocationOnIcon/>
                        </InputAdornment>
                    ),
                } }
            />
        </React.Fragment>
    )
}

function shouldFetchRentalCars( input ) {
    return ( input && input.length > MINIMUM_REQUIRED_INPUT_LENGTH );
}

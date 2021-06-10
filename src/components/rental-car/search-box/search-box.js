import React from 'react';
import { useEffect } from "react";
import { getRentalCars } from "../../../adapters/api"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from "../../../contexts/states";
import {
    MINIMUM_REQUIRED_INPUT_LENGTH, NUMBER_OF_RESULT_REQUIRED,
    UPDATE_RENTAL_CAR_RESULTS, SET_INPUT_TEXT, SET_NUMBER_FOUND
} from '../../../constants';

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
    const [ states, dispatch ] = useStateValue();
    const { text } = states;
    useEffect( () => {
        checkTextCharacter( text );
    }, [ text ] );


    const checkTextCharacter = inputValue => {
        if (inputValue.length <= MINIMUM_REQUIRED_INPUT_LENGTH) {
            updateResults( [] );
        }
    };

    const updateResults = newResults => {
        dispatch( {
            type: UPDATE_RENTAL_CAR_RESULTS,
            value: newResults
        } )
    };

    const updateNumberFound = number => {
        dispatch( {
            type: SET_NUMBER_FOUND,
            value: number
        } )
    };

    const updateText = newValue => {
        dispatch( {
            type: SET_INPUT_TEXT,
            value: newValue
        } )
    };


    const updateSuggestions = newSuggestions => {
        console.log(newSuggestions);
        updateNumberFound( newSuggestions.numFound );
        updateResults( newSuggestions.docs );
    };


    const onChangeHandler = ( newValue ) => {
        updateText( newValue );
        if (shouldFetchRentalCars( newValue )) {
            getRentalCars( newValue, NUMBER_OF_RESULT_REQUIRED )
                .then( ( response ) => updateSuggestions( response.data.results ) )
                .catch( ( error ) => {
                    console.error( error );
                    return [];
                } );
        }
    };
    const classes = useStyles();
    return (
        <React.Fragment>
            <TextField
                id="rental-card-input"
                onChange={ e => onChangeHandler( e.target.value ) }
                value={ text }
                placeholder="Pick-up Location: "
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

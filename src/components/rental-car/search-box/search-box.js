import React from 'react';
import { useEffect, useState } from "react";
import { getRentalCars } from "../../../adapters/api"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormControl } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from "../../../contexts/states";
import useDebounce from "../../../hooks/useDebounce";


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
    const [ isSearching, setIsSearching ] = useState( false );
    const { text } = states;
    // TODO - we can use this hook in the later stage
    const debouncedSearchTerm = useDebounce( text, 500 );

    useEffect( () => {
        if (text) {
            console.log( text );
            setIsSearching( true );
            searchCharacters( text ).then( ( results ) => {
                setIsSearching( false );
                if (shouldFetchRentalCars( text )) {
                    updateSuggestions( results );
                } else {
                    updateResults( [] );
                }
            } );
        } else {
            updateResults( [] );
            setIsSearching( false );
        }
    }, [ text ] );


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
        updateNumberFound( newSuggestions.numFound );
        updateResults( newSuggestions.docs );
    };


    const searchCharacters = search => {
        return getRentalCars( search, NUMBER_OF_RESULT_REQUIRED )
            .then( ( response ) => ( response.data.results ) )
            .catch( ( error ) => {
                console.error( error );
                return [];
            } );
    };

    const shouldFetchRentalCars = input => {
        return ( input && input.length > MINIMUM_REQUIRED_INPUT_LENGTH );
    };


    const classes = useStyles();
    return (
        <React.Fragment>
            <FormControl fullWidth role="search">
                <TextField
                    id="rental-card-input"
                    onChange={ e => updateText( e.target.value ) }
                    value={ text }
                    placeholder="Pick-up Location: "
                    variant="filled"
                    className={ classes.textField }
                    InputLabelProps={ {
                        'shrink': true,
                        'aria-label': 'Pick-up Location'
                    } }
                    label="Pick-up location:"
                    InputProps={ {
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOnIcon/>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                {
                                    isSearching &&
                                    <CircularProgress/>
                                }
                            </InputAdornment>
                        ),
                    } }
                />
            </FormControl>
        </React.Fragment>
    )
}


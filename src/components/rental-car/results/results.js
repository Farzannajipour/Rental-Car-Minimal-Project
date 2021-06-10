import React, { useState } from 'react';
import { useStateValue } from "../../../contexts/states";
import { SET_INPUT_TEXT } from "../../../constants";
import styles from "./results.module.scss"
import Chip from '@material-ui/core/Chip';
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ( {
    airport: {
        backgroundColor: "#961412 !important;",
        color: "#fff",
        minWidth: "5rem"
    },
    city: {
        backgroundColor: "#0A63B0 !important;",
        color: "#fff",
        minWidth: "5rem"
    },
    region: {
        backgroundColor: "#017C44 !important;",
        color: "#fff",
        minWidth: "5rem"
    },
    station: {
        region: {
            backgroundColor: "#474747 !important;",
            color: "#fff",
            minWidth: "5rem"
        }
    }
} ) );


export default function Result() {
    const [ states, dispatch ] = useStateValue();
    const { suggestions, numFound } = states;
    const isNumFoundZero = numFound === 0;
    const [ , setSelected ] = useState( [] );
    const updateText = newValue => {
        dispatch( {
            type: SET_INPUT_TEXT,
            value: newValue
        } )
    };
    const onSuggestHandler = suggestion => {
        setSelected( suggestion );
        updateText( suggestion.name );
    };

    const getTypeOfBooking = bookingId => {
        return capitalize( bookingId.match( /[^-]*/i )[ 0 ] );
    };

    const capitalize = s => ( s && s[ 0 ].toUpperCase() + s.slice( 1 ) ) || "";

    const classes = useStyles();

    return (
        <div>
            { isNumFoundZero ?
                <div className="suggestion">
                    { [ ...suggestions ].shift().name }
                </div> :
                suggestions && suggestions.map( ( suggestion, i ) =>
                    <Box display="flex" flexDirection="row"
                         key={ i }
                         onClick={ () => onSuggestHandler( suggestion ) }
                         onBlur={ () => {
                             setTimeout( () => {
                                 setSelected( [] )
                             }, 100 )
                         } }
                         className={ [ styles.suggestion ] }>
                        { suggestion.bookingId && getTypeOfBooking( suggestion.bookingId ) === 'City' &&
                        <Chip
                            label={ getTypeOfBooking( suggestion.bookingId ) }
                            size="small"
                            className={ classes.city }
                        />
                        }

                        { suggestion.bookingId && getTypeOfBooking( suggestion.bookingId ) === 'Region' &&
                        <Chip
                            label={ getTypeOfBooking( suggestion.bookingId ) }
                            size="small"
                            className={ classes.region }
                        />
                        }

                        { suggestion.bookingId && getTypeOfBooking( suggestion.bookingId ) === 'Airport' &&
                        <Chip
                            label={ getTypeOfBooking( suggestion.bookingId ) }
                            size="small"
                            className={ classes.airport }
                        />
                        }

                        { suggestion.bookingId && getTypeOfBooking( suggestion.bookingId ) === 'Station' &&
                        <Chip
                            label={ getTypeOfBooking( suggestion.bookingId ) }
                            size="small"
                            className={ classes.station }
                        />
                        }


                        <Box display="flex" flexDirection="column" className={ styles.description }>
                            <Box>{ suggestion.name } { suggestion.iata && ( suggestion.iata ) }</Box>
                            <Box>
                                { suggestion.city && suggestion.city }
                                { suggestion.region && suggestion.region }
                                { suggestion.country && suggestion.country }
                            </Box>
                        </Box>
                    </Box>
                )
            }
        </div>
    )
}



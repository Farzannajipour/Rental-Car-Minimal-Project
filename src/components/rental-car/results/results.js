import React, { useState } from 'react';
import { useStateValue } from "../../../contexts/states";
import { SET_INPUT_TEXT } from "../../../constants";
import styles from "./results.module.scss"
import Chip from '@material-ui/core/Chip';
import { Box } from "@material-ui/core";
import LocationChips from "./location-chip/location-chip";


export default function Result() {
    const [ states, dispatch ] = useStateValue();
    const { suggestions } = states;
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


    return (
        <div>
            {
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
                        { suggestion.bookingId && <LocationChips bookingId={ suggestion.bookingId }/> }



                        {/*{ suggestion.bookingId && getTypeOfBooking( suggestion.bookingId ) === 'Region' &&*/}
                        {/*<Chip*/}
                        {/*    label={ getTypeOfBooking( suggestion.bookingId ) }*/}
                        {/*    size="small"*/}
                        {/*    className={ classes.region }*/}
                        {/*/>*/}
                        {/*}*/}

                        {/*{ getTypeOfBooking( suggestion.bookingId ) === 'Airport' &&*/}
                        {/*<Chip*/}
                        {/*    label={ getTypeOfBooking( suggestion.bookingId ) }*/}
                        {/*    size="small"*/}
                        {/*    className={ classes.airport }*/}
                        {/*/>*/}
                        {/*}*/}

                        {/*{ suggestion.bookingId && getTypeOfBooking( suggestion.bookingId ) === 'Station' &&*/}
                        {/*<Chip*/}
                        {/*    label={ getTypeOfBooking( suggestion.bookingId ) }*/}
                        {/*    size="small"*/}
                        {/*    className={ classes.station }*/}
                        {/*/>*/}
                        {/*}*/}


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



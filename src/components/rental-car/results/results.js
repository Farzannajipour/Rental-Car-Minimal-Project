import React, { useState } from 'react';
import { useStateValue } from "../../../contexts/states";
import { SET_INPUT_TEXT } from "../../../constants";


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
        return bookingId.match( /[^-]*/i )[ 0 ]
    };

    return (
        <div>
            { isNumFoundZero ?
                <div className="suggestion">
                    { [ ...suggestions ].shift().name }
                </div> :
                suggestions && suggestions.map( ( suggestion, i ) =>
                    <div key={ i }
                         onClick={ () => onSuggestHandler( suggestion ) }
                         onBlur={ () => {
                             setTimeout( () => {
                                 setSelected( [] )
                             }, 100 )
                         } }
                         className="justify-content-center suggestion">

                        { suggestion.name } { suggestion.iata && ( suggestion.iata ) } <br/>
                        { suggestion.city } , { suggestion.region } , { suggestion.country } <br/>
                        { suggestion.bookingId && getTypeOfBooking( suggestion.bookingId ) }
                    </div>
                )
            }
        </div>
    )
}



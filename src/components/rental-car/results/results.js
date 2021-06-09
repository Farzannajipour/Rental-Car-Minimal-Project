import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from "../../../contexts/states";

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


export default function Result() {
    const [ states ] = useStateValue();
    const { suggestions } = states;
    const [ selected, setSelected ] = useState( [] );
    const classes = useStyles();
    const onSuggestHandler = ( text ) => {
        setSelected( [] );
    };
    return (
        <div>
            { suggestions && suggestions.map( ( suggestion, i ) =>
                <div key={ i }
                     onClick={ () => onSuggestHandler( suggestion.email ) }
                     onBlur={ () => {
                         setTimeout( () => {
                             setSuggestions( [] )
                         }, 100 )
                     } }
                     className="col-md-12 suggestion justify-content-center"> { suggestion.email } </div>
            ) }
        </div>
    )
}



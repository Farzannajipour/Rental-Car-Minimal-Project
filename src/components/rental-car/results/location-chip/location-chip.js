import React from 'react';
import Chip from "@material-ui/core/Chip";
import classNames from "classnames";


export default function LocationChips( props ) {
    const getTypeOfBooking = bookingId => {
        return bookingId.match( /[^-]*/i )[ 0 ];
    };
    const capitalize = s => ( s && s[ 0 ].toUpperCase() + s.slice( 1 ) ) || "";

    return (
        <Chip
            label={ capitalize( getTypeOfBooking( props.bookingId ) ) }
            size="small"
            className={ classNames( getTypeOfBooking( props.bookingId ) ) }
        />
    );

}



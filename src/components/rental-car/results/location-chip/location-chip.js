import React from 'react';
import Chip from "@material-ui/core/Chip";
import classNames from "classnames";
import { capitalize, getTypeOfBooking } from "./helpers/decorate";


export default function LocationChips( props ) {
    return (
        <Chip
            label={ capitalize( getTypeOfBooking( props.bookingId ) ) }
            size="small"
            className={ classNames( getTypeOfBooking( props.bookingId ) ) }
        />
    );
}



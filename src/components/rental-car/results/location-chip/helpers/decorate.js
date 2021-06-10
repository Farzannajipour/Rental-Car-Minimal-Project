export function getTypeOfBooking( word ) {
    return word.match( /[^-]*/i )[ 0 ];
}

export function capitalize( word ) {
    return word && word[ 0 ].toUpperCase() + word.slice( 1 );
}

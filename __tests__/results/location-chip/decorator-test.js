import { getTypeOfBooking, capitalize } from "../../../src/components/rental-car/results/location-chip/helpers/decorate";

test( 'Should fetch type from bookingID for airport', () => {
    expect( getTypeOfBooking( "airport-10566" ) ).toMatch( "airport" );
} );

test( 'Should fetch type from bookingID for city', () => {
    expect( getTypeOfBooking( "city-2592266" ) ).toMatch( "city" );
} );

test( 'Should the first letter uppercase', () => {
    expect( capitalize( "airport" ) ).not.toMatch( "airport" );
} );

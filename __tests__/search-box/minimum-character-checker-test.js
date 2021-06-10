import { shouldFetchRentalCars } from '../../src/components/rental-car/search-box/helpers/minimum-character-checker';


test( 'Should no results for 1 character', () => {
    expect( shouldFetchRentalCars( "a" ) ).toBe( false );
} );

test( 'Should have results for 2 character', () => {
    expect( shouldFetchRentalCars( "aa" ) ).toBe( true );
} );

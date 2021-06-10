import {shouldFetchRentalCars} from '../src/helpers/searchBox'
test('No results for 1 character', () => {
    expect(shouldFetchRentalCars("a")).toBe(false);    
});
import {MINIMUM_REQUIRED_INPUT_LENGTH} from '../constants';

export function shouldFetchRentalCars(input) {
    return ( input && input.length > MINIMUM_REQUIRED_INPUT_LENGTH );
};
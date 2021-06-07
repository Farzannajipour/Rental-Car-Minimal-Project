import { MINIMUM_REQUIRED_INPUT_LENGTH } from './constants';

export function shouldFetchRentalCars(input) {
    if(!input) {
        return false;
    } else if(input.length < MINIMUM_REQUIRED_INPUT_LENGTH) {
        return false;
    }
    return true;
}

export function fetchRentalCarsByInput(input) {
    // return getRentalCars
}
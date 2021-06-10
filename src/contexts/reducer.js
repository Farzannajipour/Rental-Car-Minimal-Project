import { UPDATE_RENTAL_CAR_RESULTS, SET_INPUT_TEXT, SET_NUMBER_FOUND } from '../constants';

export function getInitialState() {
    return {
        suggestions: [],
        text: '',
        numFound: -1
    }
}

export const mainReducer = ( state, action ) => {
    const { type, value } = action;
    switch (type) {
        case UPDATE_RENTAL_CAR_RESULTS:
            return {
                ...state,
                suggestions: value
            };
        case SET_INPUT_TEXT:
            return {
                ...state,
                text: value
            };
        case SET_NUMBER_FOUND:
            return {
                ...state,
                numFound: value
            };
        default:
            throw new Error( `Unhandled action type: ${ type }` )
    }
};

import { UPDATE_RENTAL_CAR_RESULTS } from '../constants';

export function getInitialState() {
    return {
        suggestions: []
    }
}

export const mainReducer = ( state, action ) => {
    console.log( state, action );
    const { type, value } = action;
    if (type === UPDATE_RENTAL_CAR_RESULTS) {
        return {
            ...state,
            suggestions: value
        }
    }
    throw new Error( `Unhandled action type: ${ type }` )
};

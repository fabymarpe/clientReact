/**
 * Created by fabymarpe on 7/26/18.
 */
const initialState = {business: {}, owner: {}, status: ''};

export function loan(state = initialState, action) {
    switch (action.type) {
        case 'saveBusinessData':
            state.business = action.business;
            return state;
        case 'saveOwnerData':
            state.owner = action.owner;
            return state;
        case 'requestLoad':
            console.log(action);
            return action.data;
        case 'cleanAll':
            return {business: {}, owner: {}};
        default:
            return state;
    }
}
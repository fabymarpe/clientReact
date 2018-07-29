export function alert(state = {}, action) {
    switch (action.type) {
        case 'ALERT_SUCCESS':
            return {
                type: 'text-success',
                message: action.message
            };
        case 'ALERT_ERROR':
            console.log(action.message);
            return {
                type: 'text-danger',
                message: action.message
            };
        case 'ALERT_CLEAR':
            return {};
        default:
            return state
    }
}

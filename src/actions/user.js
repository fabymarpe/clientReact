/**
 * Created by fabymarpe on 7/27/18.
 */
import { apiComunication } from '../services/api';
import { history } from '../helpers/history';

export const userActions = {
    login,
    logout
};

/**
 * Login action
 *
 * @param email
 * @param password
 * @returns {function(*)}
 */
function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        apiComunication.post('login', {email).then((result) => {
            let responseJson = result;
            if (200 === responseJson.code) {
                let user = responseJson.msg;
                sessionStorage.setItem('user', JSON.stringify(user));
                dispatch(success(user));
            } else{
                console.log(responseJson.msg);
            }
            }, error => {
                dispatch(failure(error));
                //dispatch(alertActions.error(error));
            });
    };

    function request(user) { return { type: 'USERS_LOGIN_REQUEST', user } }
    function success(user) { return { type: 'USERS_LOGIN_SUCCESS', user } }
    function failure(error) { return { type: 'USERS_LOGIN_FAILURE', error } }
}

/**
 * Logout action
 *
 * @returns {{type: string}}
 */
function logout() {
    userService.logout();
    return { type: 'USERS_LOGOUT' };
}
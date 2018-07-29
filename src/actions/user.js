/**
 * Created by fabymarpe on 7/27/18.
 */
import { history } from "../helpers/history";
import { apiComunication } from '../services/api';
import { alert } from "./alert";

export const userActions = {
    login,
    logout,
};

/**
 * Login action
 *
 * @param email
 * @param password
 * @returns {function(*)}
 */
function login(email, password) {
    let data = {email: email, password: password};
    return dispatch => {
        dispatch(request(email));
        apiComunication.post('login', data).then((result) => {
            let responseJson = result;
            if (200 === responseJson.code) {
                let user = responseJson.msg;
                localStorage.setItem('user', JSON.stringify(user));
                history.push('/loan');
                dispatch(success(user));
                dispatch(alert.clear());
            } else {
                dispatch(alert.error(responseJson.msg));
            }
        }, error => {
            dispatch(failure(error));
            dispatch(alert.error(error));
        });
    }


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
    let user = JSON.parse(localStorage.getItem('user'));
    return dispatch => {
        apiComunication.post('logout', user).then((result) => {
            let responseJson = result;
            if (200 === responseJson.code) {
                localStorage.removeItem('user');
                history.push('/');
                dispatch({ type: 'USERS_LOGOUT' });
                dispatch(alert.clear());
            } else {
                dispatch(alert.error(responseJson.msg));
            }
        }, error => {
            dispatch(alert.error(error));
        });
    }
}
/**
 * Created by fabymarpe on 7/26/18.
 */
import { combineReducers } from 'redux';
import  { loan } from './loan';
import { login } from './login';

const rootReducer = combineReducers({
    login,
    loan,
});

export default rootReducer;
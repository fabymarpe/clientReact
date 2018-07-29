/**
 * Created by fabymarpe on 7/26/18.
 */
import { combineReducers } from 'redux';
import { login } from './login';
import { alert} from "./alert";

const rootReducer = combineReducers({
    login,
    alert
});

export default rootReducer;
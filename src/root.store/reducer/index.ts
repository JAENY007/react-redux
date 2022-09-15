import { combineReducers } from "redux";
import { setToken } from './reducer';

const reducers = combineReducers({
    token: setToken
});

export default reducers;
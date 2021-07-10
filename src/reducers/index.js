import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    islogged: loggedReducer
});

export default allReducers;
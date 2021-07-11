import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import appointmentReducer from './appointment';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    islogged: loggedReducer,
    appointment: appointmentReducer
});

export default allReducers;
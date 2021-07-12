import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import appointmentReducer from './appointment';
import yearMonthReducer from './yearMonthReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    islogged: loggedReducer,
    appointment: appointmentReducer,
    yearmonth: yearMonthReducer
});

export default allReducers;
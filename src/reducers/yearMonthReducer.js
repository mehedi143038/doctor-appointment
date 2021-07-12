let newDate = new Date();
let currentMonth = newDate.getMonth() + 1;
let currentYear = newDate.getFullYear();

const yearMonthReducer = (state = {month: currentMonth, year: currentYear},action) => {
    switch(action.type){
        case 'addYearMonth':
            return action.payload;
        default:
            return state;
    }
}

export default yearMonthReducer;
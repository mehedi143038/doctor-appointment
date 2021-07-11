const initialData = [
    {
        name: "mehedi", 
        gender: "male",
        age: '25',
        date: "2021-07-22",
        time: "12:30"
    },
    {
        name: "hasan", 
        gender: "male",
        age: '25',
        date: "2020-02-19",
        time: "1:30"
    }
]

const appointmentReducer = (state = initialData, action) => {
    switch(action.type){
        case "addAppointment":
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}

export default appointmentReducer;
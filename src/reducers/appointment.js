const initialData = [
    {
        name: "Delowar", 
        gender: "male",
        age: '25',
        date: "2021-07-01",
        time: "12:30"
    },
    {
        name: "Ferdous", 
        gender: "male",
        age: '25',
        date: "2021-07-01",
        time: "12:35"
    },
    {
        name: "Mama", 
        gender: "male",
        age: '25',
        date: "2021-07-01",
        time: "12:40"
    },
    {
        name: "Afsana", 
        gender: "male",
        age: '25',
        date: "2021-07-01",
        time: "12:30"
    },
    {
        name: "Afrin", 
        gender: "male",
        age: '25',
        date: "2021-07-01",
        time: "12:35"
    },
    {
        name: "Arshi", 
        gender: "male",
        age: '25',
        date: "2021-07-01",
        time: "12:40"
    },
    {
        name: "Sabbir", 
        gender: "male",
        age: '25',
        date: "2021-07-02",
        time: "12:30"
    },
    {
        name: "Hossain", 
        gender: "male",
        age: '25',
        date: "2021-07-02",
        time: "12:35"
    },
    {
        name: "Boka", 
        gender: "male",
        age: '25',
        date: "2021-07-02",
        time: "12:40"
    },
    {
        name: "Musfiq", 
        gender: "male",
        age: '25',
        date: "2021-07-03",
        time: "12:30"
    },
    {
        name: "Rahim", 
        gender: "male",
        age: '25',
        date: "2021-07-03",
        time: "12:35"
    },
    {
        name: "Mitu", 
        gender: "male",
        age: '25',
        date: "2021-07-03",
        time: "12:40"
    },
    {
        name: "Sakib", 
        gender: "male",
        age: '25',
        date: "2021-07-04",
        time: "12:30"
    },
    {
        name: "Al", 
        gender: "male",
        age: '25',
        date: "2021-07-04",
        time: "12:35"
    },
    {
        name: "Hasan", 
        gender: "male",
        age: '25',
        date: "2021-07-04",
        time: "12:40"
    },
    {
        name: "Najmul", 
        gender: "male",
        age: '25',
        date: "2021-07-05",
        time: "12:30"
    },
    {
        name: "Hossain", 
        gender: "male",
        age: '25',
        date: "2021-07-05",
        time: "12:35"
    },
    {
        name: "Shanto", 
        gender: "male",
        age: '25',
        date: "2021-07-05",
        time: "12:40"
    },
    {
        name: "Mahmud", 
        gender: "male",
        age: '25',
        date: "2021-07-06",
        time: "12:30"
    },
    {
        name: "Ullah", 
        gender: "male",
        age: '25',
        date: "2021-07-06",
        time: "12:35"
    },
    {
        name: "Riyad", 
        gender: "male",
        age: '25',
        date: "2021-07-06",
        time: "12:40"
    },
    {
        name: "Masrafee", 
        gender: "male",
        age: '25',
        date: "2021-07-07",
        time: "12:30"
    },
    {
        name: "Bin", 
        gender: "male",
        age: '25',
        date: "2021-07-07",
        time: "12:35"
    },
    {
        name: "Mortaza", 
        gender: "male",
        age: '25',
        date: "2021-07-07",
        time: "12:40"
    },
    {
        name: "Sabbir", 
        gender: "male",
        age: '25',
        date: "2021-07-08",
        time: "12:30"
    },
    {
        name: "Hoaasin", 
        gender: "male",
        age: '25',
        date: "2021-07-08",
        time: "12:35"
    },
    {
        name: "Rumman", 
        gender: "male",
        age: '25',
        date: "2021-07-08",
        time: "12:40"
    },
    {
        name: "Sadman", 
        gender: "male",
        age: '25',
        date: "2021-07-09",
        time: "12:30"
    },
    {
        name: "Islam", 
        gender: "male",
        age: '25',
        date: "2021-07-09",
        time: "12:35"
    },
    {
        name: "Vai", 
        gender: "male",
        age: '25',
        date: "2021-07-09",
        time: "12:40"
    },
    {
        name: "Tamim", 
        gender: "male",
        age: '25',
        date: "2021-07-10",
        time: "12:30"
    },
    {
        name: "Iqbal", 
        gender: "male",
        age: '25',
        date: "2021-07-10",
        time: "12:35"
    },
    {
        name: "Khan", 
        gender: "male",
        age: '25',
        date: "2021-07-10",
        time: "12:40"
    },
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
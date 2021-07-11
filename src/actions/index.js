export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const decrement = (nr) => {
    return {
        type: 'DECREMENT',
        payload: nr
    }
}

export const sign_in = () => {
    return{
        type: "sign_in"
    }
}


export const addAppointment = (data) => {
    return{
        type: "addAppointment",
        payload: data
    }
}
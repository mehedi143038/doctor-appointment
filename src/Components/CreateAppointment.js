import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CreateAppointment = ({appoint}) => {
    console.log(appoint);
    return (
        <div>
            <h3>Name of Patient : {appoint.name}</h3>
                <h6>Gender : {appoint.gender}</h6>
                
        </div>
    );
};

export default CreateAppointment;
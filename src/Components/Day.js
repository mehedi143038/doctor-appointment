import React, { useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

const Day = (props) => {
    const {selectedYear, selectedMonth, index} = props;
    const appointment = useSelector(state=>state.appointment);
    const ddlAppointment = [];
    appointment.map((appoint)=>ddlAppointment.push({...appoint, value: appoint.name, label: appoint.name}));
    //console.log(ddlAppointment);
    const correspondingDate = [];
    ddlAppointment.map((appointment) => {
        let yearGotten = parseInt(appointment.date.slice(0,4));
        let monthGotten = parseInt(appointment.date.slice(5,7));
        let dateGotten = parseInt(appointment.date.slice(8,10));
        console.log(yearGotten, monthGotten, index);
        if(yearGotten===selectedYear && monthGotten===selectedMonth && dateGotten===index){
            correspondingDate.push(appointment);
        }
        correspondingDate.sort((a, b) => {
            if (a.time > b.time) {
              return 1;
            }
            if (a.time < b.time) {
              return -1;
            }
            return 0;
          });
          console.log("After sorted",correspondingDate);
    })

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [item, setItem] = useState({});

    return (
        <div>
            <div style={{ border: "1px solid black", color: "black", backgroundColor: "gray", height: "100px", boxShadow: "5px 5px gray", margin: "5%", textAlign: "center" }}>
                <h4>{index}</h4>
                <Select onChange={(event) =>{
                    setItem(event);
                    setIsModalOpen(true);

                }} options={correspondingDate} />
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'grey'
                    },
                    content: {
                        position: 'absolute',
                        height: '80%',
                        width: '50%',
                        top: '10%',
                        left: '30%',
                        right: '20%',
                        bottom: '20%',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '10px',
                        outline: 'none',
                        padding: '20px'
                    }
                }}
            >
                <h3>Name : {item.name}</h3>
                <h4>Gender: {item.gender}</h4>
                <h4>Age: {item.age}</h4>
                <h4>Date: {item.date}</h4>
                <h4>Time: {item.time}</h4>
                <div className="float-right">
                    <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    );
};

export default Day;
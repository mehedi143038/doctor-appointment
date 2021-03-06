import React, { useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addAppointment, yearMonthControl } from '../actions';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');

const Home = () => {
    // const counter = useSelector(state => state.counter);
    // const islogged = useSelector(state => state.isLogged);
    // const appointment = useSelector(state => state.appoinement);
    const dispatch = useDispatch();


    const year = [
        { value: 2021, label: 2021 },
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 }
    ];

    const month = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
        { value: 6, label: 6 },
        { value: 7, label: 7 },
        { value: 8, label: 8 },
        { value: 9, label: 9 },
        { value: 10, label: 10 },
        { value: 11, label: 11 },
        { value: 12, label: 12 }
    ];


    let newDate = new Date();
    let currentMonth = newDate.getMonth() + 1;
    let currentYear = newDate.getFullYear();

    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMOnth] = useState(currentMonth);
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(selectedYear, selectedMonth);

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        dispatch(addAppointment(data));
        alert("Appointment Added Successfully");
        console.log(data);
    }



    return (
        <div style={{ margin: '0 10%' }}>
            <div className="heading">
                <h1>Doctor Appointment</h1>
                <h3>See the Appointments...</h3>
            </div>
            <div id="yearMonth" style={{ marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor="year">Year : </label>
                        <Select defaultInputValue={currentYear} onChange={(event) => setSelectedYear(event.value)} options={year} />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="month">Month : </label>
                        <Select defaultInputValue={currentMonth} onChange={(event) => setSelectedMOnth(event.value)} options={month} />
                    </div>
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-2">
                        <button onClick={() => setIsModalOpen(true)} className="btn btn-success">Create Appointment</button>
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input className='form-control' {...register("name")} />
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select className="form-control" {...register("gender")}>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Age</label>
                                    <input className="form-control" {...register("age")} />
                                </div>
                                <div className="form-group">
                                    <label>Date</label>
                                    <input className="form-control" type="date" {...register("date")} />
                                </div>
                                <div className="form-group">
                                    <label>Time</label>
                                    <input className="form-control" type="time" {...register("time")} />
                                </div>
                                <input type="submit" />
                            </form>
                            <div className="float-right">
                                <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
                            </div>
                        </Modal>
                    </div>
                    <div className="col-md-4">
                        <p style={{ fontWeight: 'bold' }}>After Changing Year/Month, Please Click the Apply button here to see the changes</p>
                        <Link to={"/year/" + selectedYear + "/month/" + selectedMonth}><button onClick={() => dispatch(yearMonthControl({ month: selectedMonth, year: selectedYear }))} className='btn btn-primary'>Apply</button></Link>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                {
                    (selectedYear % 4 === 0 && selectedMonth === 2) && (twentyNine.map((index) => {
                        return (
                            <div className="col-md-2">
                                <Day key={index} index={index} selectedYear={selectedYear} selectedMonth={selectedMonth} />
                            </div>
                        )
                    }))
                }
                {
                    (selectedYear % 4 !== 0 && selectedMonth === 2) && (twentyEight.map((index) => {
                        return (
                            <div className="col-md-2">
                                <Day key={index} index={index} selectedYear={selectedYear} selectedMonth={selectedMonth} />
                            </div>
                        )
                    }))
                }

                {
                    //for January, March, May, July, August, October, December  3||5||7||8||10||12
                    ((selectedMonth === 1) || (selectedMonth === 3) || (selectedMonth === 5) || (selectedMonth === 7) || (selectedMonth === 8) || (selectedMonth === 10) || (selectedMonth === 12)) && (thirtyOne.map((index) => {
                        return (
                            <div className="col-md-2">
                                <Day key={index} index={index} selectedYear={selectedYear} selectedMonth={selectedMonth} />
                            </div>
                        )
                    }))
                }

                {
                    //for April, June, September, November
                    ((selectedMonth === 4) || (selectedMonth === 6) || (selectedMonth === 9) || (selectedMonth === 11)) && (thirty.map((index) => {
                        return (
                            <div className="col-md-2">
                                <Day key={index} index={index} selectedYear={selectedYear} selectedMonth={selectedMonth} />
                            </div>
                        )
                    }))
                }
            </div> */}
        </div>
    );
};

export default Home;
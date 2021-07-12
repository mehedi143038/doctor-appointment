import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Day from './Day';

const thirty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const thirtyOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const twentyEight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
const twentyNine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December"];


const CreateAppointment = () => {
    const yearmonth = useSelector(state => state.yearmonth);
    return (
        <div>
            <h4 className='text-center'>{monthName[yearmonth.month-1]}, {yearmonth.year}</h4><br />
            <div className="row" style={{ margin: '0 10%' }}>
                {
                    (yearmonth.year % 4 === 0 && yearmonth.month === 2) && (twentyNine.map((index) => {
                        return (
                            <div className="col-md-2">
                                <Day key={index} index={index} selectedYear={yearmonth.year} selectedMonth={yearmonth.month} />
                            </div>
                        )
                    }))
                }
                {
                    (yearmonth.year % 4 !== 0 && yearmonth.month === 2) && (twentyEight.map((index) => {
                        return (
                            <div className="col-md-2">
                                <Day key={index} index={index} selectedYear={yearmonth.year} selectedMonth={yearmonth.month} />
                            </div>
                        )
                    }))
                }

                {
                    //for January, March, May, July, August, October, December  3||5||7||8||10||12
                    ((yearmonth.month === 1) || (yearmonth.month === 3) || (yearmonth.month === 5) || (yearmonth.month === 7) || (yearmonth.month === 8) || (yearmonth.month === 10) || (yearmonth.month === 12)) && (thirtyOne.map((index) => {
                        return (
                            <div className="col-md-2">
                                <Day key={index} index={index} selectedYear={yearmonth.year} selectedMonth={yearmonth.month} />
                            </div>
                        )
                    }))
                }

                {
                    //for April, June, September, November
                    ((yearmonth.month === 4) || (yearmonth.month === 6) || (yearmonth.month === 9) || (yearmonth.month === 11)) && (thirty.map((index) => {
                        return (
                            <div className="col-md-2">
                                <Day key={index} index={index} selectedYear={yearmonth.year} selectedMonth={yearmonth.month} />
                            </div>
                        )
                    }))
                }
            </div>
        </div>
    );
};

export default CreateAppointment;
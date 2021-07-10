import React, { useState } from 'react';
import Select from 'react-select';
import Modal from 'react-modal';

const Day = ({ index }) => {
    const appointment = [
        { value: "Appoint1", label: "Appoint1" },
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
        { value: "Appoint1", label: "Appoint1" },
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 },
        { value: "Appoint1", label: "Appoint1" },
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 }
    ];
    

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <div style={{ border: "1px solid black", color: "black", backgroundColor: "gray", height: "100px", boxShadow: "5px 5px gray", margin: "5%", textAlign: "center" }}>
                <h4>{index}</h4>
                <Select onChange={(event) => setIsModalOpen(true)} options={appointment} />
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
                <h3>show something</h3>
                <div className="float-right">
                    <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    );
};

export default Day;
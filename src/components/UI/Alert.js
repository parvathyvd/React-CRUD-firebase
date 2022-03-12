import React from 'react';
import './Alert.css';

const Alert = (props) => {
    console.log(props);
    return (
        <div className="backdrop" onClick={props.onClose}>
             <div className='alert'>
                <p className={props.message.class}>{props.message.msg}</p>
                <button className='btn btn-danger' onClick={props.onClose}>Close</button>
             </div>
        </div>
       
    );
};

export default Alert;
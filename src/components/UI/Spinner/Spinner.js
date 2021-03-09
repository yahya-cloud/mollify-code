import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import './Spinner.css';

const Spinner = (props) => {
    return (
        <div className='spinner'>
        <Loader
        class="spinner"
        type="Oval"
        color={props.color}
        height={500}
        width={250} />
        </div>
    
    )
}

export default Spinner;
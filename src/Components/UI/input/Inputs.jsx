import React from "react";
import classes from './Inputs.module.css';

const Inputs = (props) => {
    return (
        <input className={classes.myInput} {...props} />
    )
}

export default Inputs;
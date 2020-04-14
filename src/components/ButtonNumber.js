import React from 'react';
import {Button} from '@material-ui/core';
import './Ui.css';

const ButtonNumber = (props) => {
    return (
            <Button variant="contained" color="primary"size="large" onClick={props.click}>{props.element}</Button>
        );
}
 
export default ButtonNumber;
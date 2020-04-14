import React from 'react';
import {Button} from '@material-ui/core';
import './Ui.css';

const ButtonClear = (props) => {
    return ( <div>
        <Button variant="contained" color="secondary" size="large" id='btn-clear' onClick={props.opClick}>{props.operation}</Button>
    </div> );
}
 
export default ButtonClear;

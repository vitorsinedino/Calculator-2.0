import React from 'react';
import {Button} from '@material-ui/core';
import './Ui.css';

const ButtonOperation = (props) => {
    return ( <div>
        <Button variant="contained" color="secondary" size="large" onClick={props.opClick}>{props.operation}</Button>
    </div> );
}
 
export default ButtonOperation;

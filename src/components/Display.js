import React from 'react';
import './Ui.css';
import {TextField} from '@material-ui/core';

const Display = (props) => {
    return (
        <TextField id="filled-basic" label="enter your calculation" variant="filled" size='small' value={props.text}>
                </TextField>
                );
}
 
export default Display;
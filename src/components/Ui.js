import React from 'react';
import {Button, ButtonGroup, Paper, Container, StylesProvider} from '@material-ui/core';
import './Ui.css';
import Display from './Display';
import ButtonNumber from './ButtonNumber';
import ButtonOperation from './ButtonOperation';
import ButtonClear from './ButtonClear';


class Ui extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            input: '',
            previous : '',
            current : '',
            operator: ''           
                };
    }
    addToInput = val =>{
        this.setState({input : this.state.input + val});
    };

    calculate = () =>{
        var expression = this.state.input;
        var result = eval(expression);
        this.setState({input: result});
    };

    clear = () =>{
        this.setState({input: ''});
    }
    
    render() { 
        return(
            <StylesProvider injectFirst>
                <Container maxWidth="sm">
                <Paper elevation={3} className='align-content-center' style={{textAlign:'center'}}>
                <Display text={this.state.input}></Display>
                <br></br>  
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <ButtonNumber element ='7'click={() => this.addToInput("7")}></ButtonNumber>
                        <ButtonNumber element ='8'click={() => this.addToInput("8")}></ButtonNumber>
                        <ButtonNumber element ='9' click={() => this.addToInput("9")}></ButtonNumber>
                        <ButtonOperation operation ='/' opClick={() => this.addToInput('/')}></ButtonOperation>
                    </ButtonGroup>
                <br></br>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <ButtonNumber element ='4' click={() => this.addToInput("4")}></ButtonNumber>
                        <ButtonNumber element ='5' click={() => this.addToInput("5")}></ButtonNumber>
                        <ButtonNumber element ='6' click={() => this.addToInput("6")}></ButtonNumber>
                        <ButtonOperation operation ='X' opClick={() => this.addToInput('*')}></ButtonOperation>
                    </ButtonGroup>
                <br></br>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <ButtonNumber element ='1' click={() => this.addToInput("1")}></ButtonNumber>
                        <ButtonNumber element ='2' click={() => this.addToInput("2")}></ButtonNumber>
                        <ButtonNumber element ='3' click={() => this.addToInput("3")}></ButtonNumber>
                        <ButtonOperation operation ='_' opClick={() => this.addToInput('-')}></ButtonOperation>
                    </ButtonGroup>
                <br></br>
                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                        <ButtonNumber element ='0' click={() => this.addToInput("0")}></ButtonNumber>
                        <ButtonOperation operation ='.' opClick={() => this.addToInput('.')}></ButtonOperation>
                        <ButtonOperation operation ='CE' opClick={this.clear}></ButtonOperation>
                        <ButtonOperation operation ='+' opClick={() => this.addToInput('+')}></ButtonOperation>
                    </ButtonGroup>
                <br></br>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <ButtonClear operation='=' opClick={this.calculate}></ButtonClear>
                    </ButtonGroup>
                
               
            </Paper>
            
            </Container>
        </StylesProvider>
            
        );
    }
}
 
export default Ui;
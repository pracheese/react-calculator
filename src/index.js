import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PropTypes from "prop-types";



const CalculatorKey =(props)=>(
<button className="key" style={{backgroundColor:props.color}} onClick = {props.onButtonClick}>{props.number} </button>
);

const CalculatorKeypad =(props) =>(
    <Container>
        <Row>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="C" color = "gray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="" color = "gray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="%" color = "gray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="/" color = "orange"/></Col>
        </Row>
        <Row>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="7" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="8" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="9" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="*" color = "orange"/></Col>
        </Row>
        <Row>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="4" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="5" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="6" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="-" color = "orange"/></Col>
        </Row>
        <Row>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="1" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="2" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="3" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="+" color = "orange"/></Col>
        </Row>
        <Row>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="0" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="." color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorKey onButtonClick={props.onButtonClick} number="=" color = "orange"/></Col>
        </Row>
    </Container>
)

const CalculatorScreen =(props) =>(
    <div className="displayScreen">
        <div  className="textArea">{props.equation}</div>   
        <div  className="textArea">{props.result}</div>  
    </div>        
);    

class CalculatorBody extends React.Component{
    state={
        result:'',
        equation:''
    }

    onButtonClick = event =>{
        let userInput = this.state.result;
        const currentInputButton = event.target.innerHTML.trim();
        let result = this.state.result;
        if (currentInputButton === 'C')
             return this.clear();
        else if (((currentInputButton >=0) && (currentInputButton <= 9))||(currentInputButton === '.')){
            userInput +=currentInputButton.trim();
            this.setState({result:userInput});
        }
        else if ((currentInputButton === '+')||(currentInputButton === '-')||(currentInputButton === '*')||
                 (currentInputButton === '/')||(currentInputButton === '%')||(currentInputButton === '^')){
             userInput =userInput+currentInputButton;
             this.setState({result:userInput});
        }
       

        else if (currentInputButton === '=')
        {            
            result = eval(userInput);
            this.setState(
                {
                equation: userInput,
                result: result
                }
            );
        }   
    }
        clear(){
            this.setState({
                result:'',
                equation:''
            });
        }
    render(){
        return(
            <div className="calcbody">
                <CalculatorScreen equation={this.state.equation} result={this.state.result} />
                <CalculatorKeypad onButtonClick={this.onButtonClick}/>
            </div>
        );
    }
}

const Calculator = () =>(
    <div className="app">
        <CalculatorBody/>
    </div>
)

ReactDOM.render(<Calculator/>, document.getElementById('root'));



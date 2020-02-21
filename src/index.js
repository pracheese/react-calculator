import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PropTypes from "prop-types";



const CalculatorNumKey =(props)=>(
    <button className="key keyNum" onClick = {props.onButtonClick}>{props.number} </button>
);

const CalculatorOthKey =(props)=>(
    <button className="key keyOth" onClick = {props.onButtonClick}>{props.number} </button>
);

const CalculatorOpKey =(props)=>(
    <button className="key keyOp" onClick = {props.onButtonClick}>{props.number} </button>
);

const CalculatorLongKey =(props)=>(
    <button className="longKey keyNum" onClick = {props.onButtonClick}>{props.number} </button>
    );

const CalculatorKeypad =(props) =>(
    <Container>
        <Row>
            <Col xs="3" style={{padding:"0px"}}><CalculatorOthKey onButtonClick={props.onButtonClick} number="C" /></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorOthKey onButtonClick={props.onButtonClick} number="CE" /></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorOthKey onButtonClick={props.onButtonClick} number="%" /></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorOpKey onButtonClick={props.onButtonClick} number="/" /></Col>
        </Row>
        <Row>
            <Col xs="3" style={{padding:"0px"}}><CalculatorNumKey onButtonClick={props.onButtonClick} number="7" /></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorNumKey onButtonClick={props.onButtonClick} number="8" /></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorNumKey onButtonClick={props.onButtonClick} number="9" /></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorOpKey onButtonClick={props.onButtonClick} number="X" /></Col>
        </Row>
        <Row>
            <Col xs="3" style={{padding:"0px"}}><CalculatorNumKey onButtonClick={props.onButtonClick} number="4" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorNumKey onButtonClick={props.onButtonClick} number="5" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorNumKey onButtonClick={props.onButtonClick} number="6" color = "DarkSlateGray"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorOpKey onButtonClick={props.onButtonClick} number="-" color = "orange"/></Col>
        </Row>
        <Row>
            <Col xs="3" style={{padding:"0px"}}><CalculatorNumKey onButtonClick={props.onButtonClick} number="1" /></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorNumKey onButtonClick={props.onButtonClick} number="2" /></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorNumKey onButtonClick={props.onButtonClick} number="3" /></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorOpKey onButtonClick={props.onButtonClick} number="+" /></Col>
        </Row>
        <Row>
            <Col xs="6" style={{padding:"0px"}}><CalculatorLongKey onButtonClick={props.onButtonClick} number="0"/></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorNumKey onButtonClick={props.onButtonClick} number="." /></Col>
            <Col xs="3" style={{padding:"0px"}}><CalculatorOpKey onButtonClick={props.onButtonClick} number="=" /></Col>
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
        equation:'',
        currentOperation:Object
    }

    onButtonClick = event =>{
        let userInput = this.state.result;
        const currentInputButton = event.target.innerHTML.trim();
        let result = this.state.result;
        if (currentInputButton === 'C')
             return this.clear();
        else if (((currentInputButton >=0) && (currentInputButton <= 9))||(currentInputButton === '.')){
            if(userInput.length<9){
            userInput +=currentInputButton.trim();
            this.setState({result:userInput});
            }
        }
        else if ((currentInputButton === '+')||(currentInputButton === '-')||(currentInputButton === 'X')||
        (currentInputButton === '/')||(currentInputButton === '%')||(currentInputButton === '^')){
            this.setState({currentOperation:event.target});
            event.target.className='keyPressed';
            if(currentInputButton==='%')
                userInput=userInput/100;
            else
                userInput =userInput+currentInputButton;
            this.setState({result:userInput});
        }
       

        else if (currentInputButton === '=')
        {     
            let currentOp = this.state.currentOperation;
            currentOp.className="key keyOp";
            if(userInput.includes ("X"))  
                result = 50;
            else  
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



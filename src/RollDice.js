import React, { Component } from 'react';
import Die from './Die'

class RollDice extends Component {

    static defaultProps ={
        sides: ["one","two","three","four", "five", "six"]
    }


    constructor(props) {
        super(props);
        this.state = { 
            die1: 'one',
            die2: 'two'
         }
    }

    roll = () => {
        const number1 = Math.floor(Math.random()*this.props.sides.length);
        const newDie1= this.props.sides[number1]
        const number2 = Math.floor(Math.random()*this.props.sides.length);
        const newDie2 = this.props.sides[number2]
        
        this.setState({
            die1: newDie1,
            die2: newDie2
        })
    }

    render() { 
        return ( 
            <div className="container">
                <div className="container d-flex justify-content-center">
                    <Die  face={this.state.die1}/>
                    <Die  face={this.state.die2}/>
                </div>      
                <div className="container">
                    <buton onClick={this.roll} className="btn btn-warning btn-block p-3">Roll Dice</buton>
                </div>
            </div>
         );
    }
}
 
export default RollDice;
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
            die2: 'two',
            isRolling: false
         }
    }

    roll = () => {
        const number1 = Math.floor(Math.random()*this.props.sides.length);
        const newDie1= this.props.sides[number1]
        const number2 = Math.floor(Math.random()*this.props.sides.length);
        const newDie2 = this.props.sides[number2]
        
        this.setState({
            die1: newDie1,
            die2: newDie2,
            isRolling: true
        })

        setTimeout(() => {this.setState({isRolling: false})},1000)
    }

    render() { 
        const disable  = this.state.isRolling ? 'disabled' : '' ;
        return ( 
            <div className="container">
                <div className="container d-flex justify-content-center">
                    <Die  face={this.state.die1} shaking={this.state.isRolling}/>
                    <Die face={this.state.die2} shaking={this.state.isRolling}/>
                </div>      
                <div className="container text-center">
                    <a href="#" onClick={this.roll} className={`btn btn-warning p-3 w-50 ${disable}`} role="button" aria-disabled="true" >
                        {this.state.isRolling ? 'Rolling...' : 'Roll Dice!' }
                    </a>
                </div>
            </div>
         );
    }
}
 
export default RollDice;
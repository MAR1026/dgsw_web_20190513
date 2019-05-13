import React, {Component} from 'react';
import './counter.scss';
import Num from './Num';

class Counter extends Component {
    state = {
        value : 0,
        gamma : 1,
        delta: 1
    };

    render() {
        let {value, gamma, delta} = this.state;

        return (
            <div className='counter'>
                <div>{value}</div>
                <Num num={gamma} handleChange={this.handleChangeNum1}/>
                <Num num={delta} handleChange={this.handleChangeNum2}/>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
                <button onClick={this.handleMultipication}>*</button>
                <button onClick={this.handleDivide}>/</button>
            </div>
        );
    }

    handleChangeNum1 = event => this.setState({
            gamma : parseInt(event.target.value)
    });

    handleChangeNum2 = event => this.setState({
            delta : parseInt(event.target.value)
    });

    handlePlus = () => this.setState({
            value : this.state.gamma + this.state.delta
    });

    handleMinus = () => this.setState({
            value : this.state.gamma - this.state.delta
    });

    handleMultipication = () => this.setState({
            value: this.state.gamma * this.state.delta
    });


    handleDivide = () => this.setState({
            value: this.state.gamma / this.state.delta
    });
}

export default Counter;
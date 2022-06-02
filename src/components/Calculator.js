import React from 'react';
import '../css/Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="wrapper">
        <div className="total">
          { total }
          { operation }
          { next }
        </div>
        <button className="ac" type="button" onClick={this.onClickHandler}>AC</button>
        <button className="plus-minus" type="button" onClick={this.onClickHandler}>+/-</button>
        <button className="percent" type="button" onClick={this.onClickHandler}>%</button>
        <button className="divide" type="button" onClick={this.onClickHandler}>÷</button>
        <button className="seven" type="button" onClick={this.onClickHandler}>7</button>
        <button className="eight" type="button" onClick={this.onClickHandler}>8</button>
        <button className="nine" type="button" onClick={this.onClickHandler}>9</button>
        <button className="multiply" type="button" onClick={this.onClickHandler}>x</button>
        <button className="four" type="button" onClick={this.onClickHandler}>4</button>
        <button className="five" type="button" onClick={this.onClickHandler}>5</button>
        <button className="six" type="button" onClick={this.onClickHandler}>6</button>
        <button className="minus" type="button" onClick={this.onClickHandler}>-</button>
        <button className="one" type="button" onClick={this.onClickHandler}>1</button>
        <button className="two" type="button" onClick={this.onClickHandler}>2</button>
        <button className="three" type="button" onClick={this.onClickHandler}>3</button>
        <button className="plus" type="button" onClick={this.onClickHandler}>+</button>
        <button className="zero" type="button" onClick={this.onClickHandler}>0</button>
        <button className="point" type="button" onClick={this.onClickHandler}>.</button>
        <button className="equal" type="button" onClick={this.onClickHandler}>=</button>
      </div>
    );
  }
}

export default Calculator;

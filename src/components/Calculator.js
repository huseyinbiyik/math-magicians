import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="wrapper">
        <div className="total">
          {next || total || 0}
        </div>
        <div className="ac">
          <button type="button" onClick={this.onClickHandler}>AC</button>
        </div>
        <div className="plus-minus">
          {' '}
          <button type="button" onClick={this.onClickHandler}>+/-</button>
        </div>
        <div className="percent">
          {' '}
          <button type="button" onClick={this.onClickHandler}>%</button>
        </div>
        <div className="divide">
          {' '}
          <button type="button" onClick={this.onClickHandler}>÷</button>
        </div>
        <div className="seven">
          {' '}
          <button type="button" onClick={this.onClickHandler}>7</button>
        </div>
        <div className="eight">
          {' '}
          <button type="button" onClick={this.onClickHandler}>8</button>
        </div>
        <div className="nine">
          {' '}
          <button type="button" onClick={this.onClickHandler}>9</button>
        </div>
        <div className="multiply">
          {' '}
          <button type="button" onClick={this.onClickHandler}>x</button>
        </div>
        <div className="four">
          {' '}
          <button type="button" onClick={this.onClickHandler}>4</button>
        </div>
        <div className="five">
          {' '}
          <button type="button" onClick={this.onClickHandler}>5</button>
        </div>
        <div className="six">
          {' '}
          <button type="button" onClick={this.onClickHandler}>6</button>
        </div>
        <div className="minus">
          {' '}
          <button type="button" onClick={this.onClickHandler}>-</button>
        </div>
        <div className="one">
          {' '}
          <button type="button" onClick={this.onClickHandler}>1</button>
        </div>
        <div className="two">
          {' '}
          <button type="button" onClick={this.onClickHandler}>2</button>
        </div>
        <div className="three">
          {' '}
          <button type="button" onClick={this.onClickHandler}>3</button>
        </div>
        <div className="plus">
          {' '}
          <button type="button" onClick={this.onClickHandler}>+</button>
        </div>
        <div className="zero">
          {' '}
          <button type="button" onClick={this.onClickHandler}>0</button>
        </div>
        <div className="point">
          {' '}
          <button type="button" onClick={this.onClickHandler}>.</button>
        </div>
        <div className="equal">
          {' '}
          <button type="button" onClick={this.onClickHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;

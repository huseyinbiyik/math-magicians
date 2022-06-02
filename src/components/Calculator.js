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
    return (
      <div className="wrapper">
        <div className="total">0</div>
        <div className="ac">
          <button type="button" onClick={this.onClickHandler}>AC</button>
        </div>
        <div className="plus-minus">+/-</div>
        <div className="percent">%</div>
        <div className="divide">/</div>
        <div className="seven">7</div>
        <div className="eight">8</div>
        <div className="nine">9</div>
        <div className="multiply">*</div>
        <div className="four">4</div>
        <div className="five">5</div>
        <div className="six">6</div>
        <div className="minus">-</div>
        <div className="one">1</div>
        <div className="two">2</div>
        <div className="three">3</div>
        <div className="plus">+</div>
        <div className="zero">0</div>
        <div className="point">.</div>
        <div className="equal">=</div>
      </div>
    );
  }
}

export default Calculator;

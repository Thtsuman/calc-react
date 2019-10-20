import React from 'react';
import './App.css';
import * as math from 'mathjs';

import Button from './components/button/button.component';
import Input from './components/input/input.component';
import ClearButton from './components/clear-button/clear-button.component';

class App extends React.Component {

  state = {
    input: ''
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  }

  handleEqual = () => {
    this.setState({ input: eval(this.state.input) })
  }

  handleMultiply = val => {
    if (val === "x") {
      this.setState({ input: this.state.input + val.replace("x", "*") });
    }
  }

  handleBackspace = () => {
    this.setState({ input: this.state.input.slice(0, -1) })
  }


  render() {
    return (
      <div className="App" >
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.handleMultiply}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: '' })}>Clear</ClearButton>
            <Button handleClick={this.handleBackspace}>C</Button>
          </div>
        </div>
      </div >
    );
  }
}

export default App;

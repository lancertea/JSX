import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { btnClick } = this.props;
    return <button onClick={btnClick}>+1</button>;
  }
}

export default class Appz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <Counter
          btnClick={(e) => {
            this.increment();
          }}
        />
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          ++
        </button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

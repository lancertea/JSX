//类：shouldComponentUpdate
import React, { Component } from 'react';

export default class App2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: 'hello',
    };
  }

  render() {
    console.log('App Render 被调用');

    return (
      <div>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.change()}>改变文本</button>
      </div>
    );
  }

  //决定这一次更新要不要调用render函数，默认为true
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  change() {
    this.setState({
      message: 'bye~',
    });
  }
}

//可以让setState是同步更新的

import React, { Component } from 'react';

export default class App2 extends Component {
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
        <button
          onClick={(e) => {
            this.increment();
          }}
        >
          +1
        </button>
        <button id="btn">++</button>
      </div>
    );
  }
  //情况2:将其放入组件的生命周期中
  componentDidMount() {
    document.getElementById('btn').addEventListener('click', () => {
      this.setState({
        counter: this.state.counter + 1,
      });
      console.log(this.state.counter);
    });
  }

  increment() {
    //情况1.将其放入定时器中
    setTimeout(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
      console.log(this.state.counter);
    }, 0);
  }
}

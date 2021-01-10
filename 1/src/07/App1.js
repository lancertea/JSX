//为什么使用setState
//修改了state后，希望React根据最新的state来重新渲染界面，但是这种修改，React并不知道数据发生了变化，必须通过setState来告知React数据已经开始发生了变化
import React, { Component } from 'react';

export default class App1 extends Component {
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
      </div>
    );
  }
  //方式2:在更新的生命周期中可获得异步更新的state
  componentDidUpdate() {
    console.log('did: '+this.state.counter);
  }

  increment() {
    this.setState({
      //数据更改，视图不会随之更改
      // this.state.counter+=1;
      // console.log(this.state.counter);
      counter: this.state.counter + 1,
    });
    // //setState是异步更新的
    console.log(this.state.counter); //0

    //获取异步更新后的数据
    //方式1:setState(更新的state，回调函数)
    //这个回调函数类似于Vue中的nextTick
    // this.setState(
    //   {
    //     counter: this.state.counter + 1,
    //   },
    //   () => {
    //     console.log(this.state.counter);
    //   }
    // );
  }
}

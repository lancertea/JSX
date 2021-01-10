//跨组件通信:context
//提供在组件之间共享值（比如全局变量，当前认证的用户、主题或首选语言）的方式，而不必显式地通过组件树的逐层传递props
import React, { Component } from 'react';

//1.创建一个需要共享的Context对象
const UserContext = React.createContext({
  // 默认值
  username: 'lancer',
  level: -1,
});

//想用context,必须是类组件
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>用户昵称: {this.context.username}</h2>
        <h2>用户等级: {this.context.level}</h2>
      </div>
    );
  }
}

//3.
ProfileHeader.contextType = UserContext;

//函数组件的写法：
//当组件有多个Context时，也要用Consumer
function ProfileHeader1() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户昵称: {value.username}</h2>
            <h2>用户等级: {value.level}</h2>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ProfileHeader1 />

      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
        <li>设置5</li>
      </ul>
    </div>
  );
}

export default class App2 extends Component {
  constructor() {
    super();

    this.state = {
      username: 'lancer',
      level: 66,
    };
  }

  render() {
    return (
      <div>
        {/* 2.每个Context对象都会返回一个Provider React组件，它允许消费组件订阅 context 的变化, Provider接收一个 value 属性，传递给消费组件*/}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    );
  }
}

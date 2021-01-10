//高阶组件:参数为组件，返回值也为组件的函数
//不建议一个组件继承一个组件的写法，而是组件的组合
import React, { PureComponent } from 'react';

class App1 extends PureComponent {
  render() {
    // return <div>App:{this.props.name}</div>;
    return <div>App</div>;
  }
}
//高阶组件的定义
// function enhanceComponent(WrappedComponent) {
//   return class NewComponent extends PureComponent {
//     render() {
//       return <WrappedComponent />;
//     }
//   };
// }

//可以更改其名字
function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent />;
    }
  }

  NewComponent.displayName = 'Higher';
  return NewComponent;
}

//可以传值
// function enhanceComponent(WrappedComponent) {
//   class NewComponent extends PureComponent {
//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   }

//   NewComponent.displayName = 'Higher';
//   return NewComponent;
// }

//函数式写法
// function enhanceComponent(WrappedComponent) {
//   function NewComponent (props) {
//       return <WrappedComponent {...props} />;

//   }

//   NewComponent.displayName = 'Higher';
//   return NewComponent;
// }

const EnhanceComponent = enhanceComponent(App1);
export default EnhanceComponent;

import React from "react";
// 如果是当前目录，一定要添加 “./”
import Child from "./Child";

class Parent extends React.Component {
  constructor(props) {
    console.log("Parent constructor");
    super(props);
    this.state = {
      parentCompName: "parent component",
      childCompName: "child component",
    };
  }

  static getDerivedStateFromProps() {
    console.log("Parent getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  /**
   * 判断是否需要更新视图，执行后面的render方法
   * 1. 如果返回 false ，则不需要执行后面的render方法，视图也不会改变
   * 2. 返回true, 需要执行render方法，视图也会对应的改变
   */
  shouldComponentUpdate() {
    console.log("Parent shouldComponentUpdate ");
    return true;
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate ");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount ");
  }

  changeParentCompName = () => {
    this.setState({
      parentCompName: "newParentName" + new Date().getTime(),
    });
  };
  // 改变子组件的名字
  changeChildCompName = () => {
    this.setState({
      childCompName: "newChildName" + new Date().getTime(),
    });
  };

  sayName = () => {
    return "Child sayName Fn";
  };

  changeSayName = () => {
    this.sayName = () => {
      return "new Child sayName Fn";
    };
  };

  age = 26;

  changeChildAge = () => {
    this.age = 27;
  };

  render() {
    console.log("Parent render");
    let { parentCompName, childCompName } = this.state;
    return (
      <div
        style={{
          border: "1px solid blue",
          padding: 10,
        }}
      >
        <div>parentName: {parentCompName}</div>
        <div>
          <button onClick={this.changeParentCompName}>改变父组件名字</button>
        </div>
        <div>
          <button onClick={this.changeChildCompName}>改变子组件名字</button>
        </div>
        <div>
          <button onClick={this.changeSayName}>改变子组件方法</button>
        </div>
        <div>
          <button onClick={this.changeChildAge}>改变子组件年龄</button>
        </div>
        <Child myname={childCompName} sayName={this.sayName} age={this.age}></Child>
      </div>
    );
  }
}

export default Parent;

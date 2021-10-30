import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
  constructor(props) {
    console.log("Child constructor");
    super(props);
    this.state = {
      profession: "javascript",
    };
  }

  static getDerivedStateFromProps() {
    console.log("Child getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  /**
   * 判断是否需要更新视图，执行后面的render方法
   * 1. 如果返回 false ，则不需要执行后面的render方法，视图也不会改变
   * 2. 返回true, 需要执行render方法，视图也会对应的改变
   */
  shouldComponentUpdate() {
    console.log("Child shouldComponentUpdate ");
    return true;
  }

  componentDidUpdate() {
    console.log("Child componentDidUpdate ");
  }

  changeProfession = () => {
    this.setState({
      profession: "nodejs" + new Date().getTime(),
    });
  };

  componentWillUnmount() {
    console.log("Child componentWillUnmount ");
  }

  destoryComp = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  render() {
    console.log("Child render");
    let { myname, sayName, age } = this.props;
    let { profession } = this.state;
    return (
      <div
        style={{
          border: "1px solid red",
        }}
      >
        <div>childName：{myname}</div>
        <div>childSayNameFn: {sayName()}</div>
        <div>childAge: {age}</div>
        <div>childProfession：{profession}</div>
        <div>
          <button onClick={this.changeProfession}>修改专业</button>
        </div>
        <div>
          <button onClick={this.destoryComp}>销毁root组件</button>
        </div>
      </div>
    );
  }
}

export default Child;

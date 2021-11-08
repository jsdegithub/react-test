import React, { Component } from "react";
class Key extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testArray: [
        { text: "组件1", id: "a" },
        { text: "组件2", id: "b" },
        { text: "组件3", id: "c" },
        { text: "组件4", id: "d" },
      ],
    };
  }

  //修改state打乱顺序
  sort = () => {
    this.setState({
      testArray: [
        { text: "组件1", id: "a" },
        { text: "组件3", id: "c" },
        { text: "组件2", id: "b" },
        { text: "组件4", id: "d" },
      ],
    });
  };

  render() {
    return (
      <div>
        <div>不指定key属性</div>
        <ul>
          {this.state.testArray.map((item) => {
            return (
              <li>
                <span>{item.text}</span>
                <input />
              </li>
            );
          })}
        </ul>
        <div>指定key属性</div>
        <ul>
          {this.state.testArray.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.text}</span>
                <input />
              </li>
            );
          })}
        </ul>
        <button onClick={this.sort}>打乱排序</button>
      </div>
    );
  }
}

export default Key;

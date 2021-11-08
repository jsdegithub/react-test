import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "ParentComponent",
      childName: "ChildComponent",
      childFamilyMembers: {
        dad: "David",
        mom: "Lily",
      },
    };
  }

  handleClickName = () => {
    this.setState({ childName: "ChildNewName" });
  };

  handleClickFamily = () => {
    this.setState({
      childFamilyMembers: {
        dad: "David",
        mom: "Lily",
      },
    });
  };

  render() {
    console.log("parent render");
    return (
      <div>
        <p>name: {this.state.parentName}</p>
        <Child name={this.state.childName} family={this.state.childFamilyMembers} />
        <button onClick={this.handleClickName}>修改子组件name</button>
        <button onClick={this.handleClickFamily}>修改子组件family</button>
      </div>
    );
  }
}

export default Parent;

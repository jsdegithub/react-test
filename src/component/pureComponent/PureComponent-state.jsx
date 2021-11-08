import React, { PureComponent } from "react";

class ComponentPure extends PureComponent {
  constructor() {
    super();
    // 事先定义好familyMembers，这样 setState({familyMembers: this.familyMembers})就不会触发Rerender了，因为familyMembers的地址没变
    this.familyMembers = {
      dad: "David",
      mum: "Lily",
    };
    this.state = {
      name: "XiaoMing",
      familyMembers: this.familyMembers,
    };
    console.log("pure-constructor");
  }

  changeState = () => {
    this.setState({ name: "newName" });  //会触发Rerender，因为name改变了
    // this.setState({ name: "XiaoMing" }); //不会触发Rerender，因为name没变
    // this.setState({
    //   //这里如果直接是familyMembers: {...}，则会触发Rerender，
    //   //因为这样的定义方式相当于重新创建了一个对象，引用地址会改变
    //   familyMembers: this.familyMembers,  //不会触发Rerender，因为familyMembers没变
    // });
  };

  render() {
    console.log("pure-render");
    return (
      <div>
        PureComponent
        <div>{this.state.name}</div>
        <button onClick={this.changeState}>Click</button>
      </div>
    );
  }
}

export default ComponentPure;

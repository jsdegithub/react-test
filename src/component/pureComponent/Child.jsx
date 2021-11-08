import React from "react";

class Child extends React.PureComponent {
  render() {
    console.log("child render");
    let { name, family } = this.props;
    return (
      <div>
        <p>name：{name}</p>
        <p>dad: {family.dad}</p>
        <p>mom: {family.mom}</p>
      </div>
    );
  }
}

export default Child;

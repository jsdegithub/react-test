import React from "react";

class ReactEvent extends React.Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.childRef = React.createRef();
    this.grandpaRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener(
      "click",
      () => {
        console.log(`document原生事件捕获`);
      },
      true
    );
    document.addEventListener("click", () => {
      console.log(`document原生事件冒泡`);
    });

    this.grandpaRef.current.addEventListener(
      "click",
      () => {
        console.log(`爷爷元素原生事件捕获`);
      },
      true
    );
    this.grandpaRef.current.addEventListener("click", () => {
      console.log(`爷爷元素原生事件冒泡`);
    });

    this.parentRef.current.addEventListener(
      "click",
      () => {
        console.log(`父元素原生事件捕获`);
      },
      true
    );
    this.parentRef.current.addEventListener("click", () => {
      console.log(`父元素原生事件冒泡`);
    });
    this.childRef.current.addEventListener(
      "click",
      () => {
        console.log(`子元素原生事件捕获`);
      },
      true
    );
    this.childRef.current.addEventListener("click", () => {
      console.log(`子元素原生事件冒泡`);
    });
  }

  handleGrandpaBubble = () => {
    console.log(`爷爷元素React事件冒泡`);
  };

  handleGrandpaCapture = () => {
    console.log(`爷爷元素React事件捕获`);
  };

  handleParentBubble = () => {
    console.log(`父元素React事件冒泡`);
  };

  handleChildBubble = () => {
    console.log(`子元素React事件冒泡`);
  };

  handleParentCapture = () => {
    console.log(`父元素React事件捕获`);
  };

  handleChileCapture = () => {
    console.log(`子元素React事件捕获`);
  };

  render() {
    return (
      <div
        ref={this.grandpaRef}
        onClick={this.handleGrandpaBubble}
        onClickCapture={this.handleGrandpaCapture}
      >
        <div
          ref={this.parentRef}
          onClick={this.handleParentBubble}
          onClickCapture={this.handleParentCapture}
        >
          <div
            ref={this.childRef}
            onClick={this.handleChildBubble}
            onClickCapture={this.handleChileCapture}
          >
            事件处理测试
          </div>
        </div>
      </div>
    );
  }
}

export default ReactEvent;

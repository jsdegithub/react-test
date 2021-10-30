import React, { useState, memo } from "react";
import ReactDOM from "react-dom";

const Child = ({ myname, myage, handleChildClick }) => {
  console.log("************Child render***********");

  const [profession, setProfession] = useState("javascript");
  const changeProfession = () => {
    setProfession("nodejs" + new Date().getTime());
  };
  const destoryComp = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  };

  return (
    <div
      style={{
        border: "1px solid red",
      }}
    >
      <div>childName：{myname}</div>
      <div>childAge：{myage.age}</div>
      <div>childProfession：{profession}</div>
      <div>
        <button onClick={handleChildClick}>handleChildClick</button>
      </div>
      <div>
        <button onClick={changeProfession}>修改专业</button>
      </div>
      <div>
        <button onClick={destoryComp}>销毁root组件</button>
      </div>
    </div>
  );
};

export default memo(Child);

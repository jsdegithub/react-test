import React, { useCallback, useMemo, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [parentCompName, setParentCompName] = useState("parentName");
  const [childCompName, setChildCompName] = useState("childName");

  const changeParentCompName = () => {
    setParentCompName("newParentName" + new Date().getTime());
  };

  const changeChildCompName = () => {
    setChildCompName("newChildName" + new Date().getTime());
  };

  let obj = useMemo(() => {
    return {
      age: 26,
    };
  }, []);

  const changeAge = () => {
    obj.age = 27;
  };

  const handleChildClick = () => {
    console.log("handleChildClick");
  };
  const handleChildClickCallback = useCallback(() => {
    handleChildClick();
  }, []);

  const getSum = () => {
    var arr = [];
    for (var i = 1; i <= 10000000; i++) {
      arr.push(i);
    }
    return arr.reduce((a, b) => a + b);
  };

  const sum = useMemo(() => {
    return getSum();
  }, []);
  console.log(`sum: ${sum}`);

  return (
    <div
      style={{
        border: "1px solid blue",
        padding: 10,
      }}
    >
      <div>parentName: {parentCompName}</div>
      <div>
        <button onClick={changeParentCompName}>改变父组件名字</button>
      </div>
      <div>
        <button onClick={changeChildCompName}>改变子组件名字</button>
      </div>
      <div>
        <button onClick={changeAge}>改变子组件age</button>
      </div>
      <Child
        myname={childCompName}
        myage={obj}
        handleChildClick={handleChildClickCallback}
      ></Child>
    </div>
  );
};

export default Parent;

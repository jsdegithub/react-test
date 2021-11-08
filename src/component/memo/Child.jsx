import React, { memo } from "react";

const Child = ({ name, family }) => {
  console.log("child render");
  return (
    <div>
      <p>name：{name}</p>
      <p>dad: {family.dad}</p>
      <p>mom: {family.mom}</p>
    </div>
  );
};

export default memo(Child);

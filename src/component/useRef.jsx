import { useRef } from "react";

export const RefHook = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value = new Date().getTime();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

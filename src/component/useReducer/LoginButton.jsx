import { useContext } from "react";
import { LoginContext } from "./LoginForm-useReducerAndContext";

const LoginButton = () => {
  const dispatch = useContext(LoginContext);
  const handleSubmit = () => {
    dispatch({ type: "loginStart" });
  };

  return <button onClick={handleSubmit}>子组件登录按钮</button>;
};

export default LoginButton;

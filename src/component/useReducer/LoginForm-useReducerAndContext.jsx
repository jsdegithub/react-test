import axios from "axios";
import { createContext, useReducer, useRef } from "react";
import LoginButton from "./LoginButton";

// export不能写到组件里面
export const LoginContext = createContext();

const LoginForm = () => {
  const initialState = {
    loading: false,
    error: "",
    jwt: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "loginStart":
        return { ...state, loading: true };
      case "loginSuccess":
        return { ...state, loading: false, jwt: action.payload.jwt };
      case "loginFailed":
        return { ...state, loading: false, error: action.payload.error };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async () => {
    // username: romanjin@163.com  password: 123456
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(typeof username); //string
    console.log(typeof password); //string
    try {
      dispatch({ type: "loginStart" });
      const { data } = await axios.post(
        "http://123.56.149.216:8080/auth/login",
        {
          email: username,
          password: password,
        },
        {
          headers: {
            "x-icode": "79123EA2741006E2",
          },
        }
      );
      dispatch({ type: "loginSuccess", payload: { jwt: data.token } });
    } catch (e) {
      dispatch({ type: "loginFailed", payload: { error: e.message } });
    }
  };

  const { loading, error, jwt } = state;
  if (loading) return <div>'登录请求中...'</div>;
  if (error) return <div>'出错了'</div>;
  return (
    <LoginContext.Provider value={dispatch}>
      <div>
        {jwt !== "" && <h2>欢迎回来</h2>}
        <input type="text" ref={usernameRef} />
        <input type="password" ref={passwordRef} />
        <button onClick={handleSubmit}>父组件登录按钮</button>
        <LoginButton></LoginButton>
      </div>
    </LoginContext.Provider>
  );
};

export default LoginForm;

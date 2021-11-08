import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { Button } from "antd";
import axios from "axios";

export const SignIn = () => {
  const loading = useSelector((state) => state.login.loading);
  const error = useSelector((state) => state.login.error);
  const jwt = useSelector((state) => state.login.jwt);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (jwt !== null) {
      console.log(jwt);
      history.push("/");
    }
  }, [jwt]);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log(username);
    console.log(password);

    try {
      dispatch({
        type: "loginStart",
      });
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
      dispatch({
        type: "loginSuccess",
        payload: data.token,
      });
    } catch (e) {
      dispatch({
        type: "loginFailed",
        payload: e.message,
      });
    }
  };

  if (error) {
    return <div>error: login failed.</div>;
  }

  return (
    <div>
      <h1>SignIn</h1>
      <input type="text" ref={usernameRef} />
      <input type="text" ref={passwordRef} />
      <Button type="primary" loading={loading} onClick={handleSubmit}>
        登录
      </Button>
    </div>
  );
};

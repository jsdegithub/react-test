import axios from "axios";
import { useRef, useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [jwt, setJwt] = useState("");

  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async () => {
    // username: romanjin@163.com  password: 123456
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(typeof username); //string
    console.log(typeof password); //string
    try {
      setLoading(true);
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
      setJwt(data.token);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  if (loading) return <div>'登录请求中...'</div>;
  if (error) return <div>'出错了'</div>;
  return (
    <div>
      {jwt !== "" && <h2>欢迎回来</h2>}
      <input type="text" ref={usernameRef} />
      <input type="password" ref={passwordRef} />
      <button onClick={handleSubmit}>登录</button>
    </div>
  );
};

export default LoginForm;

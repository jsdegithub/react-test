import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";
import { Spin } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const jwt = useSelector((state) => state.login.jwt);
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.recommendProduct.loading);
  const error = useSelector((state) => state.recommendProduct.error);
  const recommendProductList = useSelector(
    (state) => state.recommendProduct.recommendProductList
  );

  console.log("loading: ", loading);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: "getRecommendProductListStart",
      });
      try {
        const { data } = await axios.get(
          "http://123.56.149.216:8080/api/productCollections"
        );
        console.log("RecommendProductList: ", data);
        dispatch({
          type: "getRecommendProductListSuccess",
          payload: data,
        });
      } catch (e) {
        dispatch({
          type: "getRecommendProductListFailed",
          payload: e.message,
        });
      }
    };

    fetchData();
  }, []);

  const [username, setUserName] = useState("");

  useEffect(() => {
    if (jwt !== null) {
      const { username } = jwt_decode(jwt);
      setUserName(username);
    }
  }, [jwt]);

  const handleClick = () => {
    dispatch({
      type: "logout",
    });
    history.push("/");
  };

  if (loading) {
    return (
      <Spin
        size={"large"}
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  if (error) {
    return <div>网站出错：{error}</div>;
  }
  return (
    <div>
      <h1>HomePage{jwt !== null && <span>, 欢迎回来{username}</span>}</h1>
      {jwt === null ? (
        <button
          onClick={() => {
            history.push("/signIn");
          }}
        >
          登录
        </button>
      ) : (
        <button onClick={handleClick}>登出</button>
      )}
      <button onClick={() => history.push("/shoppingCart")}>购物车</button>
      <div>
        <ul>
          {recommendProductList[0].touristRoutes.map((i) => (
            <li key={i.id}>
              <Link to={`/productDetail/${i.id}`}>{i.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

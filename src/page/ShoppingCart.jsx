import { Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCartProductActionCreator } from "../redux/reducer/shoppingCart/reducer";

export const ShoppingCart = () => {
  const product = useSelector((state) => state.shoppingCart.product);
  const loading = useSelector((state) => state.shoppingCart.loading);
  const error = useSelector((state) => state.shoppingCart.error);
  const jwt = useSelector((state) => state.login.jwt);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingCartProductActionCreator(jwt));
  }, []);

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
      <h1>ShoppingCart</h1>
      <h3>购物车列表</h3>
      <ul>
        {product.map((i) => (
          <li key={i.touristRouteId}>{i.touristRoute.title}</li>
        ))}
      </ul>
    </div>
  );
};

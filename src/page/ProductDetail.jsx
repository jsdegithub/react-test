import { Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetail } from "../redux/reducer/productDetail/slice";

export const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.productDetail.loading);
  const error = useSelector((state) => state.productDetail.error);
  const productDetail = useSelector((state) => state.productDetail.productDetail);

  console.log(loading);
  console.log(error);
  console.log("productDetail: ", productDetail);

  useEffect(() => {
    dispatch(getProductDetail(id));
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
      <h3>ProductDetail: {id}</h3>
      <p>{productDetail.description}</p>
    </div>
  );
};

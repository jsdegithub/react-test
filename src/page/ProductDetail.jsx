import { Spin } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { productDetailSlice } from "../redux/reducer/productDetail/slice";

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
    const fetchData = async () => {
      dispatch(productDetailSlice.actions.getProductDetailStart());
      try {
        const { data } = await axios.get(
          `http://123.56.149.216:8080/api/touristRoutes/${id}`
        );
        console.log("response: ", data);
        dispatch(productDetailSlice.actions.getProductDetailSuccess(data));
      } catch (e) {
        dispatch(productDetailSlice.actions.getProductDetailFailed(e.message));
      }
    };

    fetchData();
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

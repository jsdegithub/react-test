import { Spin } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

export const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.productDetail.loading);
  const error = useSelector((state) => state.productDetail.error);
  const product = useSelector((state) => state.productDetail.product);

  console.log(loading);
  console.log(error);
  console.log("product: ", product);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: "getProductDetailStart",
      });
      try {
        const { data } = await axios.get(
          `http://123.56.149.216:8080/api/touristRoutes/${id}`
        );
        console.log("response: ", data);
        dispatch({
          type: "getProductDetailSuccess",
          payload: data,
        });
      } catch (e) {
        dispatch({
          type: "getProductDetailFailed",
          payload: e.message,
        });
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
      <p>{product.description}</p>
    </div>
  );
};

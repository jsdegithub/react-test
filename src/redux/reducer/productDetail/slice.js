import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  error: null,
  productDetail: null,
};

export const getProductDetail = createAsyncThunk(
  "productDetail/getProductDetail",
  async (id, thunkAPI) => {
    thunkAPI.dispatch(productDetailSlice.actions.getProductDetailStart());
    try {
      const { data } = await axios.get(
        `http://123.56.149.216:8080/api/touristRoutes/${id}`
      );
      console.log("response: ", data);
      thunkAPI.dispatch(productDetailSlice.actions.getProductDetailSuccess(data));
    } catch (e) {
      thunkAPI.dispatch(productDetailSlice.actions.getProductDetailFailed(e.message));
    }
  }
);

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetailStart: (state) => {
      state.loading = true;
    },
    getProductDetailSuccess: (state, action) => {
      state.loading = false;
      state.productDetail = action.payload;
    },
    getProductDetailFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {},
});

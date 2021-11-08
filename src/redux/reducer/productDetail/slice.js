import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  error: null,
  productDetail: null,
};

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

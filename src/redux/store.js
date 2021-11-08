import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./reducer/login/reducer";
import { shoppingCartReducer } from "./reducer/shoppingCart/reducer";
import { recommendProductReducer } from "./reducer/recommendProduct/reducer";
import { productDetailSlice } from "./reducer/productDetail/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer,
  recommendProduct: recommendProductReducer,
  productDetail: productDetailSlice.reducer,
  shoppingCart: shoppingCartReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistedStore = persistStore(store);

export const rootStore = { store, persistedStore };

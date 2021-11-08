import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginReducer } from "./reducer/login/reducer";
import { shoppingCartReducer } from "./reducer/shoppingCart/reducer";
import { recommendProductReducer } from "./reducer/recommendProduct/reducer";
import { productDetailReducer } from "./reducer/productDetail/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer,
  recommendProduct: recommendProductReducer,
  productDetail: productDetailReducer,
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

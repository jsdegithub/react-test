import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { ShoppingCart } from "../page/ShoppingCart";
import { SignIn } from "../page/SignIn";
import { HomePage } from "../page/HomePage";
import { ProductDetail } from "../page/ProductDetail";

import { useSelector } from "react-redux";

const Router = () => {
  const jwt = useSelector((state) => state.login.jwt);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/productDetail/:id" component={ProductDetail} />
          <PrivateRoute
            path="/shoppingCart"
            component={ShoppingCart}
            isAuthenticated={jwt !== null}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;

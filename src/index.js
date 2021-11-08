import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import ReactEvent from "./component/ReactEvent";
// import Parent from "./component/useMemo和useCallback/Parent";
// import Parent from "./component/生命周期和Rerender/Parent";
// import { RefHook } from "./component/useRef";
// import Counter from "./component/useReducer/useReducer";
// import LoginForm from "./component/useReducer/LoginForm";
// import LoginForm from "./component/useReducer/LoginForm-useReducer";
// import LoginForm from "./component/useReducer/LoginForm-useReducerAndContext";
// import PureComponent from "./component/pureComponent/PureComponent-state";
// import PureComponent from "./component/pureComponent/PureComponent-props";
// import Memo from "./component/memo/Memo";
// import Key from "./component/key/Key";

import "antd/dist/antd.css";
import axios from "axios";
import { rootStore } from "./redux/store";
import { Provider } from "react-redux";
import Router from "./route/Router";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.headers["x-icode"] = "79123EA2741006E2";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate persistor={rootStore.persistedStore}>
        <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

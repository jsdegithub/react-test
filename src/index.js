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
import LoginForm from "./component/useReducer/LoginForm-useReducerAndContext";

ReactDOM.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>,
  document.getElementById("root")
);

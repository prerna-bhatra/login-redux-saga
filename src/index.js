import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
// import persistor from "./redux/persistStore";
// import PostList from "./postsList";

import "./styles.css";
import Login from "./login";

const App = () => {
  return (
    <div className="App">
      <h1>React Hooks + Redux Saga </h1>
      {/* <PostList /> */}
      <Login />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>,
  rootElement
);

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import routes from "../config/routes";

import "../styles/main.scss";

const reducer = (state = {}, action) => {
  return { ...state, ...action.payload }
};

let store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Router>
        <div className="app-body">
          <div className="main-content">
            {routes.map((route, i) => <Route key={i} {...route} />)}
          </div>
        </div>
      </Router>
    </div>
  </Provider>
);

export default App;

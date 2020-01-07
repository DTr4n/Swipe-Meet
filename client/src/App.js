import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import Landing from "./components/layout/Landing";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
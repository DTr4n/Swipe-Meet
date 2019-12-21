import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./pages/Login.pages"
import SignUp from "./pages/SignUp.pages"


function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;

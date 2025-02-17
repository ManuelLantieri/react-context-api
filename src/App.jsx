import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={PostDetail} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;

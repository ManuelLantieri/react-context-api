import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { AlertProvider } from "./context/AlertContext";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <AlertProvider>
      <SearchProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:id" component={PostDetail} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </SearchProvider>
    </AlertProvider>
  );
}

export default App;

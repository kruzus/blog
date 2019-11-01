import React, { Component } from "react";
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';


import Header from "./components/Header/Header";
import Blog from "./components/Blog-container/Blog";
import Post from './components/Post';



export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={Blog} />
        <Route exact path="/post" component={Post} />
        </Router>
    );
  }
}

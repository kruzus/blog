import React, { Component } from "react";
import Header from "./components/Header/Header";
import Blog from "./components/Blog-container/Blog";

export default class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Blog />
      </main>
    );
  }
}

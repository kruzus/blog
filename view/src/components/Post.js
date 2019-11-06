import React, { Component } from "react";
import axios from 'axios';

import "./post.scss";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    //
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({ title: event.target.name, body: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.title === "" && this.state.body === "") {
      alert("Please  type something");
    } else {
      console.log(`title is ${this.state.title}`);
      console.log(`body is: ${this.state.body}`);
      event.preventDefault();
    }

    axios.post('http://192.168.1.6:8000/posts', {
      title: `${this.state.title}`,
      body: `${this.state.body}`
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }




  render() {
    return (
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <br />
            Body:
            <input
              type="text"
              value={this.state.body}
              name="body"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Blog.scss";
import axios from "axios";

export default class Blog extends Component {
  state = {
    posts: []
  };


  componentDidMount() {
    axios.get(`http://localhost:8000/posts`)
      .then(data => {
      const posts = data.data;
      this.setState({posts});
      console.log(posts);
    });
  }


  render() {
    const ViewPosts = (props) => {
      return(
        <table>
        <tbody>
        <tr>
        <td>Title</td>
        <td>Body</td>
        </tr>
        <tr>
        <td>{jsx to map over posts for title}</td>
        <td>{jsx to map over posts for body}</td>
        </tr>
        </tbody>
        </table>
      )
    }

    return <div className="blog">
      <ViewPosts />
    </div>;
  }
}

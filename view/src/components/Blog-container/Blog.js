import React, { Component } from "react";
import "./Blog.scss";
import axios from "axios";

export default class Blog extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`http://localhost:8000/posts`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    const ViewPosts = props => {
      return (
        <div className="blog">
          <h1>{props.title}</h1>
          <h1>{props.body}</h1>
        </div>
      );
    };
    return (
      <div>
        {this.state.posts.map(posts => (
          <ViewPosts title={posts.title} body={posts.body} key={posts.id}/>
        ))}
      </div>
    );
  }
}

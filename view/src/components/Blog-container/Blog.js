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
          <div className="blogTitle">{props.title}</div>
          <div className="blogBody">{props.body}</div>
        </div>
      );
    };
    return (
      <div className="blog">
        {this.state.posts.map(posts => (
          <ViewPosts title={posts.title} body={posts.body} key={posts.id}/>
        ))}

      </div>
    );
  }
}

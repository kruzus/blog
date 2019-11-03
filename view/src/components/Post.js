import React, { Component } from 'react';
import axios from 'axios';

import './post.scss';

export default class Post extends Component {
    state = {
        posts: []
      }
    
      handleChange = event => {
        this.setState({ blogTitle: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
      
    
        axios.post('http://localhost:8000/posts' , {
            title: this.state.post.blogTitle,
            body: this.state.posts.blogBody
  
        })
      }

render(){
  return(
  
<div className="center">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="blogTitle" placeholder="Title..." />
            <input type="text" name="blogBody" placeholder="Body..." />
          </label>
          <button type="submit">Post</button>
        </form>
      </div>
  
  )
}
}

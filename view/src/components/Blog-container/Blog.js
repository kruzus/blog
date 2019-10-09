import React, { Component } from 'react';
import './Blog.scss';
import axios from 'axios';


export default class Blog extends Component {

state = {
  posts: {},
};

componentDidMount() {
  axios.get('http://localhost:8000/posts').then(res => {
    const posts = res.data;
    this.setState({posts});
  
    console.log(posts.data.map(blog => blog.title))
  })
}

render(){
  return(
    //
    <div className="blog"> 
  
      </ul>
    </div>
  )
}
}

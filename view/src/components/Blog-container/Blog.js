import React, { Component } from 'react';
import './Blog.scss';
import axios from 'axios';


export default class Blog extends Component {
 

// state = {
// posts: []
// };

// componentDidMount() {
//   axios.get('http://localhost:8000/posts')
//   .then(res => {
//     const data = res.data;
//     this.setState([data]);
    
//   console.log(data)
//   })
// }

// render(){
//   return(
//     //
//     <div className="blog"> 
    
//     <ul>
//        {console.log(this.state.posts)}
//       </ul>
//     </div>
//   )
// }
// }




state = {
  posts: []
}

componentDidMount() {
  axios.get(`http://localhost:8000/posts`)
    .then(res => {
      const posts = res.data.data;
      this.setState({ posts });
    })
}

render() {
  return (
   <div className="blog">
    
{/*        
        {this.state.posts.map(post => {post.title})}
        {this.state.posts.map(post => {post.body})}
         */}


<table>
  <tr>
    <th>Title</th>
    <th>Body</th>
  </tr>
  <tr>
    <td> {this.state.posts.map(post => <h3>{post.title}</h3>)} </td>
    <td>{this.state.posts.map(post => <h3>{post.body}</h3>)}</td>
  </tr>

</table>
      
   </div>
  )
}
}
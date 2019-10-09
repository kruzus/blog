import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
render(){
  return(
    <header>
      <nav>
        <ul className="menu">
          <li className="logo">LOGO</li>
          <li><a href="#view">View</a></li>
          <li><a href="#post">Post</a></li>
        </ul>
      </nav>

    </header>
  )
}
}

import React, { Component } from 'react';
import '../app/App.css';
class Header extends Component {
  render() {
  return (
    <nav class="navbar is-danger is-fixed-top">
    <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item"  href="/index.html">
        <b class="logo">Jokes App</b>
      </a>    
    </div>
    </div>
    </nav>
    );
  }
}
export default Header
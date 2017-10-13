import React, {Component } from 'react';

class Home extends Component {
  render(){
    return (
<div>

  <nav class="header" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo"><img src="images/renraku_logo-01-1.png" width="8%" heigth="8%"/></a>
      <ul class="right hide-on-med-and-down name">
        <li><a href="#">Renraku Global Media®</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>
<video autoplay loop id="video-background" muted>
  <source src="video/renraku_2.mp4" type="video/mp4"/>
  <source src="video/renraku_2.webm" type="video/webm"/>
</video>

  <div class="parallax-container valign-wrapper">
    <div class="container">
      <div class="row center gray paddin">
        <h5>Communicate With Us™</h5>
      </div>
    </div>

  </div>
    );
  }
}

export default Home;

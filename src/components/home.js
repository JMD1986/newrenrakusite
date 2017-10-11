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

  <footer class="page-footer gray">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <p class="grey-text text-lighten-4">We are a Multinational Media Corporation dedicated to dispersing high quality content for discerning citizens</p>
        </div>
      </div>
      <div class="row">
        <div class="col s3"><a href="http://soundcloud.com/renrakurecords"><img src="images/42/soundcloud42.png"/></a></div>
        <div class="col s3">
        <a href="http://twitter.com/renrakurecords"><img src="images/42/twitter42.png"/></a>
        </div>
        <div class="col s3"><a href="http://instagram.com/renrakurecords"><img src="images/42/instagram42.png"/></a>
        </div>
        <div class="col s3"><a href="http://youtube.com/renrakurecords"><img src="images/42/youtube42.png"/></a>
        </div>
        </div>
    </div>
    <div class="footer-copyright">

    </div>
  </footer>
  </div>
    );
  }
}

export default Home;


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from "./components/home";
import Artists from './components/artists';
import Contact from './components/contact';
import Releases from './components/releases';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(<Router>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/artists">Artists</Link></li>
      <li><Link to="/releases">Releases</Link></li>

      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/artists" component={Artists} />
      <Route path="/releases" component={Releases} />

    </ul>
  </div>
</Router>

  , document.getElementById('root'));
registerServiceWorker();

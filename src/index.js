import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
            <li><Link to="/artists">Contact</Link></li>
      <li><Link to="/releases">Contact</Link></li>

      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </ul>
  </div>
</Router>

  , document.getElementById('root'));
registerServiceWorker();

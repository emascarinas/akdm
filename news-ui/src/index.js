

import React from 'react';
import ReactDOM from 'react-dom';




// global.jQuery = require('jquery');
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
// require('../node_modules/bootstrap/dist/css/bootstrap-theme.min.css');
// require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;


import Header from './header/Header';
import Hero from './hero/Hero';
import Shout from './shout/Shout';
import './index.css';

window.data = require('./defaultData').get();

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Hero />,
  document.getElementById('hero')
);

ReactDOM.render(
  <Shout />,
  document.getElementById('shout')
);

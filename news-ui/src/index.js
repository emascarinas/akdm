

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
import Spitout from './spitout/Spitout';
import './index.css';

window.gdata = {};

window.syncGdata = function(key, value){
	window.gdata[key] = value;
};

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

ReactDOM.render(
  <Spitout />,
  document.getElementById('spitout')
);



import React from 'react';
import ReactDOM from 'react-dom';

// global.jQuery = require('jquery');
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
// require('../node_modules/bootstrap/dist/css/bootstrap-theme.min.css');
// require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

// import jquery from 'jquery';
// window.$ = window.jQuery=jquery;


import Main from './Main';
import './index.css';

window.gdata = {};

window.syncGdata = function(key, value){
	window.gdata[key] = value;
};

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);


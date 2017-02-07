import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
import './index.css';

var data = require('./defaultData');
data.init();

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

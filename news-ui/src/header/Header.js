import React, { Component } from 'react';
import './header.css';
import PreviewImg from '../common/PreviewImg';

var constants = require("../constants");

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state =  this.getValues();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getValues(){
    return window.data[constants.KEY_HEADER];
  }

  handleChange(event) {
    var obj = {};
    obj[event.target.id] = window.data[constants.KEY_HEADER][event.target.id] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }  
  render() {
    return (
      <fieldset>
              <div className="form-group">
                <label htmlFor="textinput" className="control-label">Left Image URL</label>
                <input type="text" id="leftImgUrl" className="form-control" placeholder="" defaultValue={this.state.leftImgUrl} onChange={this.handleChange}  />
                <PreviewImg url={this.state.leftImgUrl} />
              </div>
              <div className="form-group">
                <label htmlFor="textinput" className="control-label">Right Image URL</label>
                <input type="text" id="rightImgUrl" className="form-control" placeholder="" defaultValue={this.state.rightImgUrl} onChange={this.handleChange}  />
                <PreviewImg url={this.state.rightImgUrl} />
              </div>
            </fieldset>
    );
  }
}


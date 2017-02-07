import React, { Component } from 'react';
// import logo from '../logo.svg';
import './header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {leftUrl: 'Mezzy', rightUrl: 'sdf'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
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
                <input type="text" id="leftUrl" className="form-control" placeholder="" defaultValue={this.state.leftUrl} onChange={this.handleChange}  />
              </div>
              <div className="form-group">
                <label htmlFor="textinput" className="control-label">Right Image URL</label>
                <input type="text" id="rightUrl" className="form-control" placeholder="" defaultValue={this.state.rightUrl} onChange={this.handleChange}  />
              </div>
            </fieldset>
    );
  }
}


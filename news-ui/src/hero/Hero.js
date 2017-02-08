import React, { Component } from 'react';
import PreviewImg from '../common/PreviewImg';

var constants = require("../constants");

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state =  this.getValues(constants.DEFAULT_ITEM);
    this.handleChange = this.handleChange.bind(this);
  }

  getValues(item){
    return JSON.parse(localStorage.getItem(item)).hero;
  }

  handleChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <fieldset>
            <div className="form-group">
              <label htmlFor="textinput" className="control-label">Hero Headline</label>
              <input type="text" className="form-control" id="headline" placeholder="" required="" defaultValue={this.state.headline} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="textarea">Hero Copy</label>
              <textarea className="form-control" id="copy" rows="15" required="" value={this.state.copy} onChange={this.handleChange}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="fileinput" className="control-label">Hero Image</label>
              <input type="text" id="imgUrl" className="form-control" placeholder="" defaultValue={this.state.imgUrl} onChange={this.handleChange}  />
                <PreviewImg url={this.state.imgUrl} />
            </div>
            </fieldset>
    );
  }
}


import React, { Component } from 'react';
import PreviewImg from '../common/PreviewImg';

var constants = require("../constants");
var data = require('../defaultData').get();
export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onHandleChange(event);
  }

  render() {
    return (
      <fieldset>
            <div className="form-group">
              <label htmlFor="textinput" className="control-label">Hero Headline</label>
              <input type="text" className="form-control" id="headline" placeholder="" required="" defaultValue={this.props.data.headline} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="textarea">Hero Copy</label>
              <textarea className="form-control" id="copy" rows="15" required="" value={this.props.data.copy} onChange={this.handleChange}></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="fileinput" className="control-label">Hero Image</label>
              <input type="text" id="imgUrl" className="form-control" placeholder="" defaultValue={this.props.data.imgUrl} onChange={this.handleChange}  />
                <PreviewImg url={this.props.data.imgUrl} />
            </div>
            </fieldset>
    );
  }
}


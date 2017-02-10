import React, { Component } from 'react';

export default class TextArea extends Component {
  render() {
    return (
	        <div className="form-group">
          <label htmlFor="textinput" className="control-label">{this.props.label}</label>
          <textarea className="form-control" id={this.props.id} rows="15" required="" value={this.props.state} onChange={this.props.handleChange}></textarea>
        </div>
    );
  }
}
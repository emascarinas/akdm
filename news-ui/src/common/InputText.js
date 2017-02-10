import React, { Component } from 'react';

export default class InputText extends Component {
  render() {
    return (
    	        <div className="form-group">
          <label htmlFor="textinput" className="control-label">{this.props.label}</label>
          <input type="text" className="form-control" id={this.props.id} placeholder="" defaultValue={this.props.state} onChange={this.props.handleChange} />
        </div>
    );
  }
}
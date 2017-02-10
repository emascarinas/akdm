import React, { Component } from 'react';

export default class PreviewImg extends Component {
  render() {
    return (
      <div className="img-preview">Image Preview: <img src={this.props.url} alt="" /></div>
    );
  }
}
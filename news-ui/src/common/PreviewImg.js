import React, { Component } from 'react';

export default class PreviewImg extends Component {
  render() {
    return (
    	<p>
    	<br/>
      <div>Image Preview: <img src={this.props.url} alt="" /></div>
      </p>
    );
  }
}
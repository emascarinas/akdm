import React, { Component } from 'react';

export default class ShoutThumb extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4">
                            <div className="thumbnail shout" data-index={this.props.index}>
                                <div className="caption">
                                    <h3>{this.props.data.headline}</h3>
                                    <p>{this.props.data.copy}</p>
                                    <p><a href="#" className="btn btn-primary" role="button" data-toggle="modal" data-target="#shoutModal" onClick={this.props.handleSubmitEdit}>Edit</a> <a href="#" className="btn btn-default" role="button">Delete</a></p>
                                </div>
                            </div>
                        </div>
    );
  }
}
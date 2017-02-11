import React, { Component } from 'react';

export default class ShoutThumb extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-4">
                            <div className="thumbnail shout" data-index={this.props.index}>
                                <div className="caption">
                                    <h3>{this.props.data.headline.substring(0,20)}...</h3>
                                    <p className="thumb-copy">{this.props.data.copy.substring(0,100)}...</p>
                                    <p><a href="#" className="btn btn-primary" role="button" data-toggle="modal" data-target="#shoutModal" onClick={this.props.handleSubmitEdit} data-index={this.props.index}>Edit</a> <a href="#" className="btn btn-default" role="button" onClick={this.props.handleSubmitDelete} data-index={this.props.index}>Delete</a></p>
                                </div>
                            </div>
                        </div>
    );
  }
}
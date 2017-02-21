import React, { Component } from 'react';

var constants = require("../constants");
var data = require('../defaultData').getHTMLTemplate();
export default class Spitout extends Component {
  constructor(props) {
    super(props);
    this.state =  this.getValues();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getValues(){
    return data;
  }

  handleChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
  }

  handleClick(event) {
    var obj = {};
    var val = this.getDesktopValues();
    obj.desktop = val;
    this.setState(obj)
  }

  getHeroHeadline(str){
    return str.replace(/<hero-headline>/g, window.gdata.hero.headline);
  }  
  getHeroCopy(str){
    return str.replace(/<hero-copy>/g, window.gdata.hero.copy);
  }
  getDesktopValues() {
    var str = data.desktop;
    str = this.getHeroHeadline(str);
    str = this.getHeroCopy(str);
    // console.log(str);
    return str;
    
  }

  render() {
    return (
      <div className="spit-out">
      <button type="button" className="btn btn-success pull-right btn-lg" data-toggle="modal" data-target="#myModal" onClick={this.handleClick}>Down goes the DM!</button>
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
      <div className="modal-content">
      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 className="modal-title" id="myModalLabel">Preview</h4>
      </div>
      <div className="modal-body">
      <div dangerouslySetInnerHTML={{__html: this.state.head + this.state.desktop + this.state.mobile + this.state.foot}} />
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
      <button type="button" className="btn btn-primary">Cash it!!</button>
      </div>
      </div>
      </div>
      </div>
      </div>  

      );
  }
}


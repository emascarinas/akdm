import React, { Component } from 'react';
import Hero from './hero/Hero';
import Shout from './shout/Shout';
import Spitout from './spitout/Spitout';

var constants = require("./constants");
var data = require('./defaultData').get();
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: data[constants.KEY_HERO]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    var obj = {
      hero: {}
    };
    obj.hero[event.target.id] = event.target.value;
    this.setState(obj);   
  }
  render() {
    return (


    <div className="container">
      <div className="page-header">
        <h1>AGENCY HAPPENINGS WEB UI</h1>
      </div>
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#hero" aria-controls="hero" role="tab" data-toggle="tab">Hero</a></li>
          <li role="presentation"><a href="#shout" aria-controls="shout" role="tab" data-toggle="tab">Shout Outs</a></li>
          <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Activities</a></li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane fade in active" id="hero"><Hero data={this.state.hero} onHandleChange={this.handleChange} /></div>
          <div role="tabpanel" className="tab-pane fade" id="shout"><Shout /></div>
          <div role="tabpanel" className="tab-pane fade" id="settings">sdfsd
          </div>
        </div>
      </div>
      <div id="spitout">
        <Spitout hero={this.state.hero} />
      </div>
    </div>



      
    );
  }
}


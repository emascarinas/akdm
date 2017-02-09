import React, { Component } from 'react';
import './shout.css';
import PreviewImg from '../common/PreviewImg';
import ShoutThumb from './ShoutThumb';

var constants = require("../constants");

export default class Shout extends Component {
  constructor(props) {
    super(props);
    //console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  }  

  getValues(item){
    return window.data.shout;
  }

  handleChange(event) {
    var obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
  }

  render() {
    var shouts = this.getValues(constants.DEFAULT_ITEM);
    return (
                <section>
                <div className="shout-add-btn">
                    <button type="button" className="btn btn-primary pull-right">Add Shout Out</button>
                </div>    
                    <div className="row thumbnail-sortable">
                       {shouts.map((x, i) => <ShoutThumb data={x} index={i} key={i} />)}
                    </div>
                </section>

    );
  }
}


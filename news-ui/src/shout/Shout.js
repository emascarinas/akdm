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
    jQuery('.thumbnail-sortable').sortable({
                placeholderClass: 'col-sm-6 col-md-4'
            }).bind('sortupdate', function() {
                  console.log(jQuery('.thumbnail'));
});
  }  

  getValues(item){
    return JSON.parse(localStorage.getItem(item)).shout;
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




import React, { Component } from 'react';
import './shout.css';
import PreviewImg from '../common/PreviewImg';
import InputText from '../common/InputText';
import TextArea from '../common/TextArea';
import ShoutThumb from './ShoutThumb';



var constants = require("../constants");
var isAdd = false;
export default class Shout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single : this.initValues(),
      list: this.getValues()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleSubmitDelete = this.handleSubmitDelete.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(prevProps);
    //console.log(prevState);
     window.shoutSortable();
    // window.shoutUpdateDataIndex();
    // this.syncShoutList();

  } 
  initValues() {
    return {
      subHeadline : "test",
      headline : "test",
      leftIconUrl : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png",
      leftIconLabel : "",
      rightIconUrl : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png",
      rightIconLabel : "",
      copy : "",
      imgUrl : ""
    }   
  }

  getValues(){
    return window.data.shout;
  }

  handleChange(event) {
    var obj = {};
    obj.single = this.state.single;
    obj.single[event.target.id] = event.target.value;
    this.setState(obj);
  }
  handleSubmitAdd(event) {
    var obj = {};
    obj.single = this.initValues();
    this.setState(obj);
    isAdd = true;
  }   
  handleSubmitEdit(event) {
    const index = event.target.dataset.index;
    var obj = {};
    obj.single = this.state.list[index];
    this.setState(obj);
    isAdd = false;
  }   
  handleSubmitDelete(event) {
    const index = event.target.dataset.index;
    this.state.list.splice(index,1);
    var obj = {};
    obj = {
      list : this.state.list
    }
    this.setState(obj);
  }   
  syncShoutList(){
    if(window.data.shoutIndex){
      var arr = [];
      var lst = this.state.list;
      window.data.shoutIndex.map(function(index){
        arr.push(lst[index]);
      });
      var obj = {
        list : arr
      };
      //this.setState(obj);
      window.data.shout = arr;
    }
  }
  handleDone(event) {
   if(isAdd){
     var obj = {};
     obj.list = this.state.list;
     obj.list.push(this.state.single);
     this.setState(obj);

   }
   
 }    

 render() {
  return (
    <section>
    <div className="shout-add-btn">
    <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#shoutModal" onClick={this.handleSubmitAdd}>Add Shout Out</button>
    </div>    
    <div className="row thumbnail-sortable">
    {this.state.list.map((x, i) => <ShoutThumb data={x} index={i} key={i} handleSubmitEdit={this.handleSubmitEdit} handleSubmitDelete={this.handleSubmitDelete} />)}
      </div>

      <div className="modal fade" id="shoutModal" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
      <div className="modal-content">
      <div className="modal-body">

      <InputText label="Sub Headline" id="subHeadline" value={this.state.single.subHeadline} handleChange={this.handleChange} />
      <InputText label="Headline" id="headline" value={this.state.single.headline} handleChange={this.handleChange} />
      <InputText label="Left Icon Url" id="leftIconUrl" value={this.state.single.leftIconUrl} handleChange={this.handleChange} />
      <PreviewImg url={this.state.single.leftIconUrl} />
      <InputText label="Left Icon Label" id="leftIconLabel" value={this.state.single.leftIconLabel} handleChange={this.handleChange} />

      <InputText label="Right Icon Url" id="rightIconUrl" value={this.state.single.rightIconUrl} handleChange={this.handleChange} />
      <PreviewImg url={this.state.single.rightIconUrl} />
      <InputText label="Right Icon Label" id="rightIconLabel" value={this.state.single.rightIconLabel} handleChange={this.handleChange} />

      <TextArea label="Copy" id="copy" value={this.state.single.copy} handleChange={this.handleChange} />
      <InputText label="Main Image Url" id="imgUrl" value={this.state.single.imgUrl} handleChange={this.handleChange} />
      <PreviewImg url={this.state.single.imgUrl} />

      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleDone}>Done</button>
      </div>            
      </div>
      </div>
      </div>

      </section>




      );
  }
}


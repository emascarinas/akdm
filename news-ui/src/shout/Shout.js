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
    this.state = {};
    this.state = {
      leftIconUrl : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/95a63f4b-f6f6-43b0-a809-3faab90959c1.png",
      rightIconUrl : "https://gallery.mailchimp.com/7bd4741878427bfeea78e4c2e/images/38bce942-423d-4832-b503-4ba2b7abc1d7.png"
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
    this.handleDone = this.handleDone.bind(this);
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
  handleSubmitAdd(event) {
    isAdd = true;
  }   
  handleSubmitEdit(event) {
    this.setState(window.data.shout[0]);
    isAdd = false;
  }   
  handleDone(event) {
    alert(isAdd);
    
  }    

  render() {
    var shouts = this.getValues(constants.DEFAULT_ITEM);
    return (
                <section>
                <div className="shout-add-btn">
                    <button type="button" className="btn btn-primary pull-right" data-toggle="modal" data-target="#shoutModal" onClick={this.handleSubmitAdd}>Add Shout Out</button>
                </div>    
                    <div className="row thumbnail-sortable">
                       {shouts.map((x, i) => <ShoutThumb data={x} index={i} key={i} handleSubmitEdit={this.handleSubmitEdit} />)}
                    </div>

<div className="modal fade" id="shoutModal" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-body">
        
        <InputText label="Sub Headline" id="subHeadline" state={this.state.subHeadline} handleChange={this.handleChange} />
        <InputText label="Headline" id="headline" state={this.state.headline} handleChange={this.handleChange} />
        <InputText label="Left Icon Url" id="leftIconUrl" state={this.state.leftIconUrl} handleChange={this.handleChange} />
        <PreviewImg url={this.state.leftIconUrl} />
        <InputText label="Left Icon Label" id="leftIconLabel" state={this.state.leftIconLabel} handleChange={this.handleChange} />

        <InputText label="Right Icon Url" id="rightIconUrl" state={this.state.rightIconUrl} handleChange={this.handleChange} />
        <PreviewImg url={this.state.rightIconUrl} />
        <InputText label="Right Icon Label" id="rightIconLabel" state={this.state.rightIconLabel} handleChange={this.handleChange} />

        <TextArea label="Copy" id="copy" state={this.state.copy} handleChange={this.handleChange} />
        <InputText label="Main Image Url" id="imgUrl" state={this.state.imgUrl} handleChange={this.handleChange} />
        <PreviewImg url={this.state.imgUrl} />

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


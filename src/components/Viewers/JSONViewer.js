// src/components/CollapsibleList.js

import React, { Component } from 'react';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import StringViewer from './StringViewer';
import NumberViewer from './NumberViewer';
import BooleanViewer from './BooleanViewer';
import PairViewer from './PairViewer';

export default class JSONViewer extends Component {

  constructor(props) {
    super(props);
  }
  
  props: {
    path: object,
    target: "defaultString",
  }

  render() {
    if(Map.isMap(this.props.target) || List.isList(this.props.target)){
      var values = this.props.target.keySeq().toArray().sort();
      //this.props.target.map(value =>
        //values.push({name: value, value: this.props.target.get(value)}));        
      

      return(
        <ul className="collapsible" data-collapsible="accordion">
          {values.map(v =>
            <PairViewer path={this.props.path.push(v)} key={v} name={v} value={this.props.target.get(v)} />
          )}
        </ul>
      );
    }

    switch(typeof this.props.target){

      case "string":return (
        <ul className="collapsible" data-collapsible="accordion">
          <StringViewer path={this.props.path} text={this.props.target}/>
        </ul>
      );

      case "number":return (
        <ul className="collapsible" data-collapsible="accordion">
          <NumberViewer path={this.props.path} number={this.props.target}/>
        </ul>
      );

      case "boolean":return (
        <ul className="collapsible" data-collapsible="accordion">
          <BooleanViewer path={this.props.path} value={this.props.target}/>
        </ul>
      );
      default: return (<p> this should not happen :( </p>); 
    }
  }
}

function mapStateToProps(state) {
  return { target: state.inspector.get('target') };
}
// src/components/CollapsibleList.js

import React, { Component } from 'react';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import StringViewer from './StringViewer';
import NumberViewer from './NumberViewer';
import BooleanViewer from './BooleanViewer';
import PairViewer from './PairViewer';
import ObjectViewer from './ObjectViewer';

export default class JSONViewer extends Component {

  constructor(props) {
    super(props);
  }
  
  props: {
    path: object,
    target: "defaultString",
  }

  getContent(){
    const {path, target} = this.props;

    if(Map.isMap(target) || List.isList(target)){
      return (
        <ObjectViewer path={path} target={target}/>
      );
    }

    switch(typeof target){

      case "string":return(
        <StringViewer path={path} text={target}/>
      );

      case "number":return (
          <NumberViewer path={path} number={target}/>
      );

      case "boolean":return (
          <BooleanViewer path={path} value={target}/>
      );
      default: return (<p> this should not happen :( </p>); 
    }
  }

  render() {
    return this.getContent();
  }
}

function mapStateToProps(state) {
  return { target: state.inspector.get('target') };
}
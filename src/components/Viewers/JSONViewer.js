// src/components/CollapsibleList.js

import React, { Component } from 'react';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import StringViewer from './StringViewer';
import NumberViewer from './NumberViewer';
import BooleanViewer from './BooleanViewer';
import PairViewer from './PairViewer';
import ObjectViewer from './ObjectViewer';
import ArrayViewer from './ArrayViewer';
import TypePicker, { getType } from './TypePicker';

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

    switch(getType(target)){

      case "object":
        return (<ObjectViewer path={path} target={target}/>);

      case "array":
        return (<ArrayViewer path={path} target={target}/>);

      case "string":
        return(<StringViewer path={path} text={target}/>);

      case "number":
        return (<NumberViewer path={path} number={target}/>);

      case "boolean":
        return (<BooleanViewer path={path} value={target}/>);

      default: return (<p> {target.toString()}</p>);
    }
  }

  click(){
    $('.collapsible').collapsible();
  }

  render() {
    const {path, target} = this.props;
    var content = this.getContent();

    if((typeof target != "object") && (path.size == 0))
      return(
          <div>
            <label>Type</label><TypePicker path={path} type={getType(target)}/>
            <label>Value</label>{content}
          </div>
      );

    return( <div>
              {content}
            </div>);
  }
}

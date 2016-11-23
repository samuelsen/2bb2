import React, { Component } from 'react';
import StringViewer from './StringViewer';
import NumberViewer from './NumberViewer';
import BooleanViewer from './BooleanViewer';
import ObjectViewer from './ObjectViewer';
import ArrayViewer from './ArrayViewer';
import TypePicker, { getType } from './TypePicker';

const $ = require('jquery');

export default class JSONViewer extends Component {
  getContent() {
    const { path, target } = this.props;
    switch (getType(target)) {
      case 'object':
        return (<ObjectViewer path={path} target={target} />);
      case 'array':
        return (<ArrayViewer path={path} target={target} />);
      case 'string':
        return (<StringViewer path={path} text={target} />);
      case 'number':
        return (<NumberViewer path={path} number={target} />);
      case 'boolean':
        return (<BooleanViewer path={path} value={target} />);
      default:
        return (<p>{target.toString()}</p>);
    }
  }

  props: {
    path: React.PropTypes.object,
    target: React.PropTypes.string,
  }

  click() {
    $('.collapsible').collapsible();
  }

  render() {
    const { path, target } = this.props;
    const content = this.getContent();

    if ((typeof target !== 'object') && (path.size === 0)) {
      return (
        <div>
          <label>Type</label>
          <TypePicker path={path} type={getType(target)} />
          <label>Value</label>
          {content}
        </div>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

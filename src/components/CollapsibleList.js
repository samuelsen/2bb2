// src/components/CollapsibleList.js

import React, { Component } from 'react';
import Collapsible from './Collapsible';

export default class CollapsibleList extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  props: {
    entries: [{
      namespace: string,
      ids: string[],
    }],
  }

  render() {
    return (
      <ul className="collapsible" data-collapsible="expandable">
        {this.props.entries.map(entry =>
          <Collapsible key={entry.namespace} namespace={entry.namespace} ids={entry.ids}/>
        )}
      </ul>
    );
  }
}

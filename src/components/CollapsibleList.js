// src/components/CollapsibleList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collapsible from './Collapsible';

class CollapsibleList extends Component {

  constructor(props) {
    super(props);
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
        {this.props.entries && this.props.entries.map(entry =>
          <Collapsible key={entry.namespace} namespace={entry.namespace} ids={entry.ids}/>
        )}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { entries: state.collapsibleList.get('entries') };
}

export default connect(mapStateToProps)(CollapsibleList);

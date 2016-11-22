// src/components/CollapsibleList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collapsible from './Collapsible';

class CollapsibleList extends Component {
  componentDidMount() {
    this.props.fetchNamespaces();
  }

  componentDidUpdate() {
    this.props.entries.forEach(
      (entry) => {
        if (entry.ids.length === 0) {
          this.props.fetchKeys(entry.namespace);
        }
      }
    );
  }

  props: {
    entries: [{
      namespace: string,
      ids: string[],
    }],
    fetchNamespaces: () => {},
    fetchKeys: () => {},
  }


  render() {
    return (
      <div>
        <ul className="collapsible" data-collapsible="expandable">
          {this.props.entries && this.props.entries.map(
            entry =>
              <Collapsible
                key={entry.namespace}
                namespace={entry.namespace}
                ids={entry.ids}
              />
          )}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNamespaces: () => dispatch({
      type: 'FETCH_NAMESPACES',
    }),
    fetchKeys: namespace => dispatch({
      type: 'FETCH_KEYS',
      namespace,
    }),
  };
}

function mapStateToProps(state) {
  return {
    entries: state.collapsibleList.get('entries'),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CollapsibleList);

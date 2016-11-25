// src/components/CollapsibleList.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collapsible from './Collapsible';
import CollapsibleSearch from './CollapsibleSearch';

import AddKeyModal from './AddKeyModal';

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
      visible: boolean,
    }],
    fetchNamespaces: () => {},
    fetchKeys: () => {},
    deleteKey: () => {},
    deleteNamespace: () => {},
  }


  render() {
    return (
      <div>
        {this.props.entries && this.props.entries.map(
          entry => <AddKeyModal key={`modal${entry.namespace}`} namespace={entry.namespace} />
        )}
        <CollapsibleSearch />
        <ul className="collapsible" data-collapsible="expandable">
          {this.props.entries && this.props.entries.map(
            (entry) => {
              if (entry.visible) {
                return (
                  <Collapsible
                    deleteKey={this.props.deleteKey}
                    deleteNamespace={this.props.deleteNamespace}
                    key={entry.namespace}
                    namespace={entry.namespace}
                    ids={entry.ids}
                  />
                );
              }
              return null;
            }
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
    deleteKey: (namespace, key) => dispatch({
      type: 'DELETE_KEY',
      namespace,
      key,
    }),
    deleteNamespace: namespace => dispatch({
      type: 'DELETE_NAMESPACE',
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

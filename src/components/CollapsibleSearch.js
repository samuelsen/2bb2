import { connect } from 'react-redux';
import React, { Component } from 'react';

class CollapsibleSearch extends Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
  }

  props: {
    applyListFilter: () => {},
  }

  updateSearch(text) {
    this.props.applyListFilter(text);
  }

  render() {
    return (
      <div className="input-field">
        <input id="CollapsibleSearch" type="text" onChange={event => this.updateSearch(event.target.value)} />
        <label htmlFor="CollapsibleSearch">Search</label>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    applyListFilter: text => dispatch({
      type: 'APPLY_FILTER',
      text,
    }),
  };
}

export default connect(null, mapDispatchToProps)(CollapsibleSearch);

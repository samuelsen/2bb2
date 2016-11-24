import { connect } from 'react-redux';
import React, { Component } from 'react';

class CollapsibleSearch extends Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = { currText: '', currFilter: 'Namespace' };
  }

  state: {
    currFilter: string,
    currText: string,
  }

  props: {
    applyListFilter: () => {},
  }

  changeFilter(choice) {
    this.setState({
      currFilter: choice,
      currText: this.state.currText,
    });
    this.props.applyListFilter(this.state.currText, choice);
  }

  updateSearch(text) {
    this.setState({
      currFilter: this.state.currFilter,
      currText: text,
    });
    this.props.applyListFilter(text, this.state.currFilter);
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s10">
          <input id="SearchBox" type="text" onChange={event => this.updateSearch(event.target.value)} />
          <label htmlFor="SearchBox">Search</label>
        </div>
        <div className="col s2">
          <a className="dropdown-button btn red col s12" href="#B" data-activates="searchCriteria">
            {this.state.currFilter}
          </a>
          <ul id="searchCriteria" className="dropdown-content">
            <li><a href="#N" className="white-link" onClick={() => this.changeFilter('Namespace')}>Namespace</a></li>
            <li><a href="#K" className="white-link" onClick={() => this.changeFilter('Key')}>Key</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    applyListFilter: (text, filter) => dispatch({
      type: 'APPLY_FILTER',
      text,
      filter,
    }),
  };
}

export default connect(null, mapDispatchToProps)(CollapsibleSearch);

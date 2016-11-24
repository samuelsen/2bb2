import React, { Component } from 'react';
import { connect } from 'react-redux';

class Create extends Component {

  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
  }

  props: {
    createData: () => {},
    namespace: string,
  }

  save(e) {
    e.preventDefault();
    const name = document.getElementById('Namespace').value;
    const newKey = document.getElementById('Key').value;
    this.props.createData(name, newKey);
  }

  render() {
    return (
      <form className="col s12" onSubmit={this.save}>
        <div className="row">
          <div className="input-field col s12">
            <input id="Namespace" type="text" className="validate" value={this.props.namespace} />
            <label htmlFor="Namespace">Namespace</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="Key" type="text" className="validate" />
            <label htmlFor="Key">Key</label>
          </div>
        </div>
        <div className="row">
          <input className="btn right waves-effect waves-light red" type="submit" value="Save" />
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createData: (namespace, key) => dispatch({
      type: 'CREATE_DATA',
      namespace,
      key,
      body: '{}',
    }),
  };
}

export default connect(null, mapDispatchToProps)(Create);

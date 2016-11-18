import React, { Component } from 'react';
import { postData } from '../actions/datastoreApi';
import { connect } from 'react-redux';
import * as saga from '../sagas.js'

class Create extends Component {
      
  save(e){
    e.preventDefault();
    
    const name = document.getElementById('Namespace').value;
    const newKey = document.getElementById('Key').value;  
    console.log(name);
    console.log(newKey);
            
    this.props.createData(name, newKey);
  }
    
  render(){
    return(
      <form className="col s12" onSubmit={this.save.bind(this)}>
        <div className="row">
          <div className="input-field col s12">
            <input id="Namespace" type="text" className="validate" />
            <label>Namespace</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="Key" type="text" className="validate" />
            <label>Key</label>
          </div>
        </div>
        <div className="row">
          <input className="btn right waves-effect waves-light red" type="submit" value="Save"/>
        </div>
      </form>
    )
  }
}

export default connect(
  null, 
  (dispatch) => ({
    createData: (name, newKey) => dispatch({type: 'CREATE_DATA', namespace: name, key: newKey, body: "{}"})
  })
)(Create)

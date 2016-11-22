import React, { Component } from 'react';
import * as InspectorActions from './../../actions/Inspector';
import { connect } from 'react-redux';

var $ = require('jquery');

class AddButton extends Component{
    constructor(props){
        super(props);
    }

    props: {
        path: object,
        addElement: React.PropTypes.func.isRequired,
    }

    handleBlur(event){
        console.log($('.collapsible').collapsible);
        $('.collapsible').collapsible();
    }

    render(){
        const { path, addElement } = this.props;

        return (<a className="btn-floating btn-medium waves-effect waves-light red right" 
                   onBlur={this.handleBlur} 
                   onClick={event => addElement(path)} 
                   style={{margin: 5}} 
                >
                    <i className="material-icons">add</i>
                </a>);
    }
}

export default connect(null, InspectorActions)(AddButton);
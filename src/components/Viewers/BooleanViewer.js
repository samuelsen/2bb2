import React, { Component } from 'react';

export default class BooleanViewer extends Component{
    constructor(props){
        super(props);
    }

    props: {
        path: object,
        value: boolean,
    }

    render(){
        var value = "False";
        if(this.props.value)
            value = "True";

        return (<div>{value}</div>);
    }
}
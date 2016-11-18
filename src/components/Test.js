import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../actions/getDHISdata';


class Test extends React.Component {    
    constructor(props) {
        super(props);
        console.log(props);
        
        console.log(props.params.namespace);
        console.log(props.params.key);
        console.log(props.params.namespace+"/"+props.params.key);
        
        loadData(props.params.namespace+"/"+props.params.key)
        .then(function(data){
            console.log(data);
            //data.map( v => document.getElementById('value').innerHTML = document.getElementById('value').innerHTML + v)
            
            $.each(data, function(k, v) {
                if( v === '[object Object]' || v === '[object Object]' ) {
                        console.log('array');
                }else{
                    document.getElementById('value').innerHTML = document.getElementById('value').innerHTML + "<p>" + k + " : </p>"
                }
            });
            
        });
    }    
    
    state: {
        value: String
    }

    render() {
        return (
        <div>
            <h1>Hello test comp</h1>
            <p>Getting namespace value: props.params.namespace <br />Getting key value: props.params.key</p>
            <p><b>URL Values</b>:<br />Namespace: {this.props.params.namespace}<br />Key: {this.props.params.key}</p>
            <p><b>Value at the given &#60;namespace&#62;/&#60;key&#62; :</b> <span id="value"></span></p>
        </div>
        );
    }
}

export default connect()(Test);
import React from 'react';
import { connect } from 'react-redux';

class Test extends React.Component {
  props: {
    params: {
      namespace: string,
      key: string,
    },
  }

  render() {
    return (
      <div>
        <h1>Hello test comp</h1>
        <p>
          <b>URL Values</b><br />
          Namespace: {this.props.params.namespace}<br />
          Key: {this.props.params.key}
        </p>
        <p>
          <b>Value at the given &#60;namespace&#62;/&#60;key&#62; :</b>
        </p>
      </div>
    );
  }
}

export default connect()(Test);

import React from 'react';

export default function BooleanViewer(props) {
  const { value } = props;
  return (
    <div>
      {value ? 'True' : 'False'}
    </div>
  );
}

BooleanViewer.propTypes = {
  value: React.PropTypes.bool,
};

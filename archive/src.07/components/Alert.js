import React from 'react';
import Button from './Button';

// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.
function Alert(props) {
  console.log(props);

  return (
    <div>
      <div className={`alert alert-${props.type || 'success'}`} role="alert">
        {props.message}
      </div>
      <Button>
        <span>Test Button</span>
        <span>Test Button</span>
      </Button>
    </div>
  );
}

export default Alert;

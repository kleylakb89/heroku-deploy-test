// First we import `useState` with React so that we can take advantage of the hook
import React, { useEffect, useState } from 'react';

export default function Counter() {
  // To set a state variable using `useState`, we give our variable a name of `count`.
  // We also set the name of the function that will update `count`. We called it `setCount`.
  // useState accepts only one argument - the initial value of the state variable.
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`New value of count: ${count}`);
  }, [count]);

  // This is a handler that we will reference in our `onClick` attribute later
  const handleClick = () => {
    setCount(prev => prev + 1);
  };
  // const handleClick = () => {
  //   setCount((count + 1));
  //   console.log(`New value of count: ${count}`);
  // };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        {/* In our button element, we add a onClick event that invokes our handleClick method */}
        <button className="btn btn-primary" type="button" onClick={handleClick}>
          Increment
        </button>
      </div>
    </div>
  );
}

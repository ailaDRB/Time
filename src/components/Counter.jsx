import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={increaseCount}> Click to Increase the counter</button>
      <button onClick={decreaseCount}>Click to Decrease the counter</button>
      <h1>{count}</h1>
    </div>
  );
}

export default Counter;

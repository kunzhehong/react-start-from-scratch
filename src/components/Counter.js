import { useState } from 'react';


export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(pre=> pre+1)}>
        Click me
      </button>
    </div>
  );
}
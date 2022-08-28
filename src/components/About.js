import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

export class About extends Component {
  static displayName = About.name;

  render (){
	return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      <Counter/>
      </main>
    </>
  )
  }
  }

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(pre => pre + 1)}>
        Click me
      </button>
    </div>
  );
}

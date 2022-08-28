import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Counter } from './Counter';

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


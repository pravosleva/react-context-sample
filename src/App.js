import React, { Component } from 'react';

import { AgeContext } from './context/age';


const Family = props => (
  <div className='family'>
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className='person'>
        <AgeContext.Consumer>
          {context => (
            <>
              <p>Age: {context.state.age}</p>
              <p>Name: {context.state.name}</p>
              <button onClick={context.growAYearOlder}>
                <span role='img' aria-label='img'>🎂</span>
              </button>
            </>
          )}
        </AgeContext.Consumer>
      </div>
    )
  }
};

class App extends Component {
  render() {
    return (
      <>
        <p>I am the app</p>
        <Family />
      </>
    );
  }
};

export default App;

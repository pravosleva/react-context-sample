import React, { Component } from 'react';


const AgeContext = React.createContext();

class AgeProvider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  }
  render() {
    return (
      <AgeContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState(prevState => ({
          age: prevState.age + 1,
        })),
      }}>
        {this.props.children}
      </AgeContext.Provider>
    )
  }
}

export {
  AgeContext,
  AgeProvider,
};

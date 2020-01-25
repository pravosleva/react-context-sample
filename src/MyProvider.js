import React, { Component } from 'react';


const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState(prevState => ({
          age: prevState.age + 1,
        })),
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export {
  MyContext,
  MyProvider,
};

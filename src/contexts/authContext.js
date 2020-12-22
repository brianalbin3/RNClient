import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class AuthContextProvider extends Component {
  state = {
    isLoggedIn: false
  };

  toggleAuth = () => {
    console.log("in toggleAuth")
    // this.setState(prevState => {
    //   return {
    //     isLoggedIn: prevState.isLoggedIn
    //   };
    // });

    this.setState({ isLoggedIn: true})
  };

  render() {
    return (
      <Provider value={{ isLoggedIn: this.state.isLoggedIn, toggleAuth: this.toggleAuth }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { AuthContextProvider, Consumer as AuthContextConsumer };

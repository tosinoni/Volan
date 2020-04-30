import React, { Component, createContext } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

import Firebase, { auth } from "../config/Firebase/firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
    isContextReady: false,
  };

  componentDidMount = () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await Firebase.getLoggedInUserObj(userAuth);
      this.setState({ user, isContextReady: true });
    });
  };
  render() {
    const { user, isContextReady } = this.state;
    return (
      <UserContext.Provider value={{ ...user, isContextReady }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;

export const withUserHOC = (Component) => {
  const Wrapper = (props) => {
    return (
      <UserContext.Consumer>
        {(state) => <Component {...props} user={state} />}
      </UserContext.Consumer>
    );
  };
  hoistNonReactStatics(Wrapper, Component);
  return Wrapper;
};

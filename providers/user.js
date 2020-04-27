import React, { Component, createContext } from "react";

import Firebase, { auth } from "../config/Firebase/firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await Firebase.getLoggedInUserObj(userAuth);
      this.setState({ user });
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;

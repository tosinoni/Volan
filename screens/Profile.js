import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import { withFirebaseHOC } from "../config/Firebase";
import { Settings } from "../screens/Settings"
import { ProfileCard } from "../screens/ProfileCard"
import { ProfileFooter } from "../screens/ProfileFooter"


class Profile extends Component {
  render() {
    return (
      <ScrollView>
        <ProfileCard/>
        <Settings/>
        <ProfileFooter/>
      </ScrollView>
    );
  }
}

export default withFirebaseHOC(Profile);
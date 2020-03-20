import React, { Component } from "react";
import Intro from "../components/Intro";
import { SafeAreaView } from "react-native";

export class IntroScreen extends Component {
  _onDone = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Intro onDone={this._onDone} />
      </SafeAreaView>
    );
  }
}

export default IntroScreen;

import React, { Component } from "react";
import Intro from "../components/Intro";
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export class IntroScreen extends Component {
  _onDone = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Intro onDone={this._onDone} />
      </SafeAreaView>
    );
  }
}

export default IntroScreen;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

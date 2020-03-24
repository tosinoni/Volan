import React, { Component } from "react";
import AnimatedLoader from "react-native-animated-loader";
import { StyleSheet } from "react-native";
export class Loader extends Component {
  render() {
    const { visible } = this.props;

    return (
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("../assets/loading.json")}
        animationStyle={styles.lottie}
        speed={1}
      />
    );
  }
}

export default Loader;

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});

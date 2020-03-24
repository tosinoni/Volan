import React, { Component } from "react";
import Intro from "../../components/Intro";
import { SafeAreaView } from "react-native";
import { styles } from "../../styles/screens/intro/IntroThree";
import { getScreenNameOnCircleClick } from "../../utils/screens/intro";

export class IntroThree extends Component {
  handleNavigate = () => {
    this.props.navigation.navigate("Home");
  };

  handleCircleClick = index => {
    const screenName = getScreenNameOnCircleClick(index);
    this.props.navigation.navigate(screenName);
  };

  handleSkip = index => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Intro
          handleSkip={this.handleSkip}
          isSkipButton
          handleCircleClick={this.handleCircleClick}
          handleNavigate={this.handleNavigate}
          screenIndex={2}
          styles={styles}
          text="Connect"
          subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae placerat nibh, nec lacinia massa."
          image={require("../../assets/images/intro/image-3.png")}
          navigateText="Get Started"
        ></Intro>
      </SafeAreaView>
    );
  }
}

export default IntroThree;

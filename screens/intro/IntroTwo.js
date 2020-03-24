import React, { Component } from "react";
import Intro from "../../components/Intro";
import { SafeAreaView } from "react-native";
import { styles } from "../../styles/screens/intro/IntroTwo";
import { getScreenNameOnCircleClick } from "../../utils/screens/intro";

export class IntroTwo extends Component {
  handleNavigate = () => {
    this.props.navigation.navigate("IntroThree");
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
          screenIndex={1}
          styles={styles}
          text="Match"
          subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae placerat nibh, nec lacinia massa."
          image={require("../../assets/images/intro/image-2.png")}
          navigateText="Next"
        ></Intro>
      </SafeAreaView>
    );
  }
}

export default IntroTwo;

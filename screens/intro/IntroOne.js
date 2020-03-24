import React, { Component } from "react";
import Intro from "../../components/Intro";
import { SafeAreaView } from "react-native";
import { styles } from "../../styles/screens/intro/IntroOne";
import { getScreenNameOnCircleClick } from "../../utils/screens/intro";

export class IntroOne extends Component {
  handleNavigate = () => {
    this.props.navigation.navigate("IntroTwo");
  };

  handleCircleClick = index => {
    const screenName = getScreenNameOnCircleClick(index);
    this.props.navigation.navigate(screenName);
  };

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <Intro
          handleNavigate={this.handleNavigate}
          handleCircleClick={this.handleCircleClick}
          screenIndex={0}
          styles={styles}
          isWelcomeText
          text="Post"
          subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae placerat nibh, nec lacinia massa."
          image={require("../../assets/images/intro/image-1.png")}
          navigateText="Next"
        ></Intro>
      </SafeAreaView>
    );
  }
}

export default IntroOne;

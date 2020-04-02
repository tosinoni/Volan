import React, { Component } from "react";
import Intro from "../components/Intro";
import { SafeAreaView } from "react-native";
import { styles as stylesOne } from "../styles/screens/intro/IntroOne";
import { styles as stylesTwo } from "../styles/screens/intro/IntroTwo";
import { styles as stylesThree } from "../styles/screens/intro/IntroThree";
import Swiper from "react-native-swiper";

export class IntroScreen extends Component {
  state = {
    currentIndex: 0
  };

  handleNextClick = () => {
    this.refs.swiper.scrollBy(1);
  };

  handleGetStarted = () => {
    this.props.navigation.navigate("Decision");
  };

  handleCircleClick = index => {
    const offset = index - this.state.currentIndex;
    this.refs.swiper.scrollBy(offset);
  };

  handleSkip = () => {
    this.props.navigation.navigate("Decision");
  };

  onIndexChanged = index => {
    this.setState({ currentIndex: index });
  };

  render() {
    return (
      <SafeAreaView style={stylesOne.safeView}>
        <Swiper
          showsPagination={false}
          loop={false}
          onIndexChanged={this.onIndexChanged}
          ref={"swiper"}
        >
          <Intro
            handleNextClick={this.handleNextClick}
            handleCircleClick={this.handleCircleClick}
            screenIndex={0}
            styles={stylesOne}
            isWelcomeText
            text="Post"
            subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae placerat nibh, nec lacinia massa."
            image={require("../assets/images/intro/image-1.png")}
            navigateText="Next"
          ></Intro>
          <Intro
            handleSkip={this.handleSkip}
            isSkipButton
            handleCircleClick={this.handleCircleClick}
            handleNextClick={this.handleNextClick}
            screenIndex={1}
            styles={stylesTwo}
            text="Match"
            subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae placerat nibh, nec lacinia massa."
            image={require("../assets/images/intro/image-2.png")}
            navigateText="Next"
          ></Intro>
          <Intro
            handleSkip={this.handleSkip}
            isSkipButton
            handleCircleClick={this.handleCircleClick}
            handleNextClick={this.handleGetStarted}
            screenIndex={2}
            styles={stylesThree}
            text="Connect"
            subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae placerat nibh, nec lacinia massa."
            image={require("../assets/images/intro/image-3.png")}
            navigateText="Get Started"
          ></Intro>
        </Swiper>
      </SafeAreaView>
    );
  }
}

export default IntroScreen;

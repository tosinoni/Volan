import React, { Component } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import * as Icon from "@expo/vector-icons";
import { withFirebaseHOC } from "../config/Firebase";
import { AsyncStorage } from "react-native";

class Initial extends Component {
  state = {
    isAssetsLoadingComplete: false
  };

  componentWillMount = async () => {
    this.loadLocalAsync();
  };

  componentDidMount = async () => {
    try {
      // previously

      await this.props.firebase.checkUserAuth(async user => {
        if (user) {
          const currentUser = await this.props.firebase.getUser(user.uid);

          //   if the user has previously logged in
          if (!currentUser || !currentUser.isExistingUser) {
            this.props.navigation.navigate("Intro");
            await this.props.firebase.updateUser(user.uid, {
              isExistingUser: true
            });
          } else {
            this.props.navigation.navigate("App");
          }
        } else {
          // if the user has previously signed out from the app
          this.props.navigation.navigate("Auth");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  loadLocalAsync = async () => {
    return await Promise.all([
      Asset.loadAsync([
        require("../assets/splash.png"),
        require("../assets/icon.png")
      ]),
      Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Icon.Ionicons.font
      })
    ]);
  };

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isAssetsLoadingComplete: true });
  };

  render() {
    return (
      <AppLoading
        startAsync={this.loadLocalAsync}
        onFinish={this.handleFinishLoading}
        onError={this.handleLoadingError}
      />
    );
  }
}

export default withFirebaseHOC(Initial);

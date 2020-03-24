import React, { Component } from "react";

import { View, Text, Row, Button, Icon } from "native-base";
import { StyleSheet } from "react-native";
import * as Facebook from "expo-facebook";
import { withFirebaseHOC } from "../config/Firebase";
import * as Google from "expo-google-app-auth";
import Loader from "./Loader";

export class SocialButtons extends Component {
  state = {
    visible: false
  };

  loginToFacebook = async () => {
    try {
      this.setState({ visible: true });

      const appId = "580361876170911";
      const permissions = ["public_profile", "email", "user_friends"]; // Permissions required, consult Facebook docs
      await Facebook.initializeAsync(appId);

      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        appId,
        {
          permissions
        }
      );

      if (type == "success") {
        const credential = this.props.firebase.getFacebookCredentials(token);
        this.addUserData(credential);
      } else {
        this.setState({ visible: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ visible: false });
      if (e.code !== "-3") this.showErrorMessage(e);
    }
  };

  loginToGoogle = async () => {
    try {
      this.setState({ visible: true });
      const result = await Google.logInAsync({
        androidClientId:
          "805901121237-ao6k1s0makubj5kpbekgvrckqu1669qj.apps.googleusercontent.com",
        iosClientId:
          "805901121237-rq7gehh65ue21no3li1tebi5idj6rg1q.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        const credential = this.props.firebase.getGoogleCredentials(result);
        this.addUserData(credential);
      } else {
        this.setState({ visible: false });
      }
    } catch (e) {
      console.log(e.code);
      if (e.code !== "-3") this.showErrorMessage(e);
      this.setState({ visible: false });
    }
  };

  addUserData = async credential => {
    try {
      const response = await this.props.firebase.loginWithSocialNetwork(
        credential
      );

      const {
        uid,
        email,
        phoneNumber,
        photoURL,
        displayName: name
      } = response.user;

      if (!response.additionalUserInfo.isNewUser) {
        const userData = { email, phoneNumber, photoURL, name, uid };
        await this.props.firebase.createNewUser(userData);
      }
      this.setState({ visible: false });
    } catch (e) {
      console.log(e);
      this.setState({ visible: false });
      this.showErrorMessage(e);
    }
  };

  showErrorMessage = error => {
    let errorMessage;

    switch (error.code) {
      case "auth/account-exists-with-different-credential":
        errorMessage = "An account with the same email exists.";
        break;
      case "auth/invalid-credential":
        errorMessage = "Invalid credentials provided.";
        break;
      case "auth/user-not-found":
        errorMessage = "Invalid email provided.";
        break;
      default:
        errorMessage = "Sign in failed.";
    }

    this.props.showErrorToast(errorMessage);
  };

  render() {
    return (
      <View style={styles.socialButtonsRow}>
        <Text style={styles.text}>or use social</Text>

        <View style={styles.socialIconsRow}>
          <Button light transparent onPress={this.loginToGoogle}>
            <Icon style={styles.socialIcon} type="AntDesign" name="google" />
          </Button>
          <Button light transparent onPress={this.loginToFacebook}>
            <Icon
              style={styles.socialIcon}
              type="MaterialCommunityIcons"
              name="facebook-box"
            />
          </Button>
        </View>

        <Loader visible={this.state.visible}></Loader>
      </View>
    );
  }
}

export default withFirebaseHOC(SocialButtons);

const styles = StyleSheet.create({
  text: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center"
  },

  socialIconsRow: {
    flexDirection: "row",
    justifyContent: "center"
  },

  socialIcon: {
    marginLeft: 8,
    marginRight: 8
  }
});

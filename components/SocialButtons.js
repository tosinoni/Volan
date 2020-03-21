import React, { Component } from "react";

import { View, Text, Row, Button, Icon } from "native-base";
import { StyleSheet } from "react-native";
import * as Facebook from "expo-facebook";
import { withFirebaseHOC } from "../config/Firebase";
import * as Google from "expo-google-app-auth";
import Toast from "react-native-easy-toast";

export class SocialButtons extends Component {
  loginToFacebook = async () => {
    try {
      const appId = "580361876170911";
      const permissions = ["public_profile", "email"]; // Permissions required, consult Facebook docs
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
      }
    } catch (e) {
      console.log(e);
      this.refs.toast.show("Failed to login with Facebook", 2000);
    }
  };

  loginToGoogle = async () => {
    try {
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
      }
    } catch (e) {
      console.log(e);
      this.refs.toast.show("Failed to login with Google", 2000);
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
    } catch (e) {
      console.log(e);
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

        <Row style={styles.socialIconsRow}>
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
        </Row>
      </View>
    );
  }
}

export default withFirebaseHOC(SocialButtons);

const styles = StyleSheet.create({
  socialButtonsRow: {
    flex: 1,
    height: "100%"
  },

  text: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center"
  },

  socialIconsRow: {
    justifyContent: "center",
    marginTop: 5
  },

  socialIcon: {
    marginLeft: 8,
    marginRight: 8
  }
});

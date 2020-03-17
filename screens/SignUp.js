import React, { Component } from "react";

import {
  Text,
  Icon,
  Item,
  Input,
  Card,
  Container,
  Content,
  Button,
  Header,
  Thumbnail,
  CardItem,
  Col,
  Row,
  Grid,
  Form,
  View,
  Label
} from "native-base";
import { StyleSheet, Image, CheckBox } from "react-native";
import SocialButtons from "../components/SocialButtons";
import Intro from "../components/Intro";

export class SignUp extends Component {
  state = {
    showRealApp: false
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };

  GoToIntroPage = () => {
    this.props.navigation.navigate("intro");
  };

  render() {
    if (!this.state.showRealApp) {
      return (
        <Container>
          <Content style={styles.content}>
            <View style={styles.logoImageBackground}>
              <Image
                style={styles.logoImage}
                source={require("../assets/images/logo-2.png")}
              />

              <Form style={styles.form}>
                <Item stackedLabel style={styles.item}>
                  <Label style={styles.Label}>Name</Label>
                  <Input style={styles.input} />
                </Item>
                <Item stackedLabel style={styles.item}>
                  <Label style={styles.Label}>Username</Label>
                  <Input style={styles.input} />
                </Item>
                <Item stackedLabel style={styles.item}>
                  <Label style={styles.Label}>Email</Label>
                  <Input style={styles.input} />
                </Item>
                <Item stackedLabel style={styles.item}>
                  <Label style={styles.Label}>Password</Label>
                  <Input
                    style={styles.input}
                    secureTextEntry="true"
                    textContentType={"newPassword"}
                  />
                </Item>
                <Item style={styles.item}>
                  <CheckBox style={styles.checkBox}></CheckBox>
                  <Text style={styles.Label}>I agree to the </Text>

                  <Button
                    light
                    transparent
                    style={styles.signupButton}
                    onPress={this.GoToSignUpPage}
                  >
                    <Text style={[styles.termsOfService, styles.bold]}>
                      Terms of Service
                    </Text>
                  </Button>
                </Item>

                <Button
                  rounded
                  light
                  block
                  style={styles.createAccount}
                  onPress={this.GoToIntroPage}
                >
                  <Text style={styles.bold}>Create Account</Text>
                </Button>

                <View style={styles.socialButtons}>
                  <SocialButtons></SocialButtons>
                </View>
              </Form>
            </View>
          </Content>
        </Container>
      );
    } else {
      return <Intro onDone={this._onDone} />;
    }
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#b82f25",
    width: "100%",
    height: "100%",
    paddingHorizontal: 50
  },

  logoImageBackground: {
    alignItems: "center",
    paddingTop: 20
  },

  logoImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    flex: 1
  },

  form: {
    width: "100%",
    height: "100%"
  },

  item: {
    marginTop: 20,
    height: 45,
    borderBottomWidth: 0
  },

  input: {
    marginTop: 5,
    borderRadius: 10,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "white",
    color: "white",
    paddingLeft: 10
  },

  Label: {
    color: "white"
  },

  bold: {
    fontWeight: "bold"
  },

  checkBox: {
    width: 20,
    height: 20,
    alignSelf: "center",
    marginRight: 10,
    borderColor: "white",
    borderRadius: 5,
    borderWidth: 2
  },

  termsOfService: {
    paddingRight: 0,
    paddingLeft: 0
  },

  createAccount: {
    marginTop: 30,
    borderRadius: 10,
    marginLeft: 15
  },

  socialButtons: {
    marginTop: 40
  }
});

export default SignUp;

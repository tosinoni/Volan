import React, { Component, Fragment } from "react";
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
  Spinner,
  Root
} from "native-base";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableHighlight,
  StatusBar
} from "react-native";
import SocialButtons from "../components/SocialButtons";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import { SafeAreaView } from "react-native";
import { withFirebaseHOC } from "../config/Firebase";
import DropdownAlert from "react-native-dropdownalert";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("email")
    .email("Enter a valid email")
    .required("Please provide your email"),
  password: Yup.string()
    .label("Password")
    .required("Please provide a password")
});

export class Login extends Component {
  GoToSignUpPage = () => this.props.navigation.navigate("Signup");
  GoToForgotPassword = () => this.props.navigation.navigate("ForgotPassword");

  handleOnLogin = async (values, actions) => {
    const { email, password } = values;
    try {
      const response = await this.props.firebase.loginWithEmail(
        email,
        password
      );

      if (response.user) {
        this.props.navigation.navigate("Intro");
      }
    } catch (error) {
      console.log(error);
      this.showErrorToast("Incorrect email or password entered");
    } finally {
      actions.setSubmitting(false);
    }
  };

  showErrorToast = errorMessage => {
    this.dropDownAlertRef.alertWithType("error", "Login failed", errorMessage);
  };

  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <ScrollView>
          <Container>
            <Content
              contentContainerStyle={styles.gridContainer}
              enableOnAndroid
            >
              <ImageBackground
                style={styles.imageBackground}
                source={require("../assets/images/login/background.jpg")}
              >
                <Image
                  style={styles.titleImage}
                  source={require("../assets/splash.png")}
                />
              </ImageBackground>
              <Form style={[styles.form, styles.formRow]}>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={(values, actions) => {
                    this.handleOnLogin(values, actions);
                  }}
                  validationSchema={validationSchema}
                >
                  {({
                    handleChange,
                    values,
                    handleSubmit,
                    errors,
                    isValid,
                    touched,
                    handleBlur,
                    isSubmitting
                  }) => (
                    <Fragment>
                      <Item rounded style={styles.item}>
                        <View style={styles.inputImageContainer}>
                          <Icon
                            active
                            type="FontAwesome"
                            style={styles.inputIcon}
                            name="user"
                          />
                        </View>

                        <Input
                          name="email"
                          value={values.email}
                          onChangeText={handleChange("email")}
                          autoCapitalize="none"
                          style={styles.input}
                          placeholder="Email"
                          placeholderTextColor="white"
                          onBlur={handleBlur("email")}
                        />
                      </Item>
                      <ErrorMessage
                        errorValue={touched.email && errors.email}
                      />

                      <Item rounded style={styles.item}>
                        <View style={styles.inputImageContainer}>
                          <Icon
                            active
                            style={styles.inputIcon}
                            name="ios-lock"
                          />
                        </View>

                        <Input
                          textContentType={"password"}
                          value={values.password}
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                          style={styles.input}
                          placeholder="Password"
                          placeholderTextColor="white"
                          secureTextEntry
                        />
                      </Item>
                      <ErrorMessage
                        errorValue={touched.password && errors.password}
                      />

                      <Button
                        onPress={handleSubmit}
                        rounded
                        light
                        block
                        style={styles.button}
                        disabled={!isValid || isSubmitting}
                      >
                        <Text style={styles.boldButton}>Log in</Text>
                        {isSubmitting && <Spinner color="white" />}
                      </Button>
                    </Fragment>
                  )}
                </Formik>

                <Button
                  transparent
                  onPress={this.GoToForgotPassword}
                  light
                  block
                  style={[styles.button, styles.forgotButton]}
                >
                  <Text style={styles.boldButton}>Forgot your password?</Text>
                </Button>

                <SocialButtons
                  showErrorToast={this.showErrorToast}
                ></SocialButtons>

                <View style={styles.signupRow}>
                  <Text style={styles.text}>Don't have an account? </Text>

                  <Button light transparent onPress={this.GoToSignUpPage}>
                    <Text style={[styles.boldButton, styles.signUpText]}>
                      Sign up
                    </Text>
                  </Button>
                </View>
              </Form>
              <DropdownAlert
                ref={ref => (this.dropDownAlertRef = ref)}
                showCancel
              />
            </Content>
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  gridContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#b82f25"
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20
  },
  titleImage: {
    width: 200,
    height: 50
  },

  formRow: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: "-10%",
    backgroundColor: "#b82f25",
    justifyContent: "space-between"
  },

  form: {
    paddingHorizontal: 50,
    paddingTop: 10
  },

  item: {
    borderRadius: 10,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    height: 45
  },

  input: {
    color: "white",
    backgroundColor: "#be433c",
    height: "100%",
    top: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },

  inputImageContainer: {
    backgroundColor: "#b32f28",

    alignItems: "center",
    justifyContent: "center",
    width: 45,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: "100%"
  },

  inputIcon: {
    fontSize: 24,
    color: "white",
    paddingLeft: 0,
    paddingRight: 0
  },

  boldButton: {
    fontWeight: "bold"
  },

  linkText: {
    justifyContent: "center",
    width: "100%"
  },

  text: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center"
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  signUpText: {
    paddingLeft: 0,
    paddingRight: 0
  }
});

export default withFirebaseHOC(Login);

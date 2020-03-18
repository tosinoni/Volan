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
  Spinner
} from "native-base";
import {
  ImageBackground,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableHighlight
} from "react-native";
import SocialButtons from "../components/SocialButtons";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .label("username")
    .required("Please provide a username"),
  password: Yup.string()
    .label("Password")
    .required("Please provide a password")
});

export class Login extends Component {
  constructor() {
    super();
    this.GoToSignUpPage = this.GoToSignUpPage.bind(this);
  }

  GoToSignUpPage() {
    this.props.navigation.navigate("SignUp");
  }

  handleSubmit = values => {
    console.log(values);
    if (values.username.length > 0 && values.password.length > 0) {
      setTimeout(() => {
        this.props.navigation.navigate("intro");
      }, 3000);
    }
  };

  render() {
    return (
      <Container>
        <Grid style={styles.gridContainer}>
          <Row>
            <ImageBackground
              style={styles.imageBackground}
              source={require("../assets/images/login/background.jpg")}
            >
              <Image
                style={styles.titleImage}
                source={require("../assets/images/splash.png")}
              />
            </ImageBackground>
          </Row>
          <Row style={styles.formRow}>
            <Form style={styles.form}>
              <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={values => {
                  this.handleSubmit(values);
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
                        name="username"
                        value={values.username}
                        onChangeText={handleChange("username")}
                        autoCapitalize="none"
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="white"
                        onBlur={handleBlur("username")}
                        autoFocus
                      />
                    </Item>
                    <ErrorMessage
                      errorValue={touched.username && errors.username}
                    />

                    <Item rounded style={styles.item}>
                      <View style={styles.inputImageContainer}>
                        <Icon active style={styles.inputIcon} name="ios-lock" />
                      </View>

                      <Input
                        textContentType={"password"}
                        value={values.password}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="white"
                        secureTextEntry="true"
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
                light
                block
                style={[styles.button, styles.forgotButton]}
              >
                <Text style={styles.boldButton}>Forgot your password?</Text>
              </Button>

              <View style={styles.socialButtons}>
                <SocialButtons></SocialButtons>
              </View>

              <Row style={styles.signupRow}>
                <Text style={styles.text}>Don't have an account? </Text>

                <Button
                  light
                  transparent
                  style={styles.signupButton}
                  onPress={this.GoToSignUpPage}
                >
                  <Text style={[styles.boldButton, styles.signUpText]}>
                    Sign up
                  </Text>
                </Button>
              </Row>
            </Form>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  gridContainer: {
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
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: -30,
    backgroundColor: "#b82f25",
    width: "100%"
  },

  form: {
    width: "100%",
    paddingHorizontal: 50,
    height: "100%"
  },

  item: {
    marginTop: 20,
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

  button: {
    marginTop: 40
  },

  forgotButton: {
    marginTop: 10,
    marginBottom: 25
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

  socialButtons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  signupRow: {
    justifyContent: "center",
    marginTop: 40
  },

  signupButton: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: "100%"
  },

  signUpText: {
    paddingLeft: 0,
    paddingRight: 0
  }
});

export default Login;

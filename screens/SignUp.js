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
  Label,
  Spinner,
  CheckBox
} from "native-base";
import { StyleSheet, Image } from "react-native";
import SocialButtons from "../components/SocialButtons";
import Intro from "../components/Intro";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label("Name")
    .required()
    .min(2, "Must have at least 2 characters"),
  username: Yup.string()
    .label("username")
    .required()
    .min(2, "Must have at least 2 characters"),
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(5, "Password must have more than 5 characters "),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must match Password")
    .required("Confirm Password is required"),
  terms: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions")
});

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

  handleSubmit = values => {
    if (values.email.length > 0 && values.password.length > 0) {
      setTimeout(() => {
        this.props.navigation.navigate("intro");
      }, 3000);
    }
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
            </View>

            <Formik
              initialValues={{
                name: "",
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
                terms: false
              }}
              onSubmit={values => {
                this.handleSubmit(values);
              }}
              validationSchema={validationSchema}
            >
              {({
                setFieldValue,
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
                  <Form style={styles.form}>
                    <Item stackedLabel style={styles.item}>
                      <Label style={styles.Label}>Name</Label>
                      <Input
                        name="name"
                        value={values.name}
                        style={styles.input}
                        onBlur={handleBlur("name")}
                        onChangeText={handleChange("name")}
                      />
                    </Item>
                    <ErrorMessage errorValue={touched.name && errors.name} />

                    <Item stackedLabel style={styles.item}>
                      <Label style={styles.Label}>Username</Label>
                      <Input
                        name="username"
                        autoCapitalize="none"
                        value={values.username}
                        style={styles.input}
                        onBlur={handleBlur("username")}
                        onChangeText={handleChange("username")}
                      />
                    </Item>
                    <ErrorMessage
                      errorValue={touched.username && errors.username}
                    />

                    <Item stackedLabel style={styles.item}>
                      <Label style={styles.Label}>Email</Label>
                      <Input
                        name="email"
                        autoCapitalize="none"
                        value={values.email}
                        onBlur={handleBlur("email")}
                        style={styles.input}
                        onChangeText={handleChange("email")}
                      />
                    </Item>

                    <ErrorMessage errorValue={touched.email && errors.email} />

                    <Item stackedLabel style={styles.item}>
                      <Label style={styles.Label}>Password</Label>
                      <Input
                        name="password"
                        value={values.password}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        style={styles.input}
                        secureTextEntry
                        textContentType={"newPassword"}
                      />
                    </Item>
                    <ErrorMessage
                      errorValue={touched.password && errors.password}
                    />

                    <Item stackedLabel style={styles.item}>
                      <Label style={styles.Label}>Confirm Password</Label>
                      <Input
                        value={values.confirmPassword}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                        style={styles.input}
                        secureTextEntry
                        textContentType={"newPassword"}
                      />
                    </Item>
                    <ErrorMessage
                      errorValue={
                        touched.confirmPassword && errors.confirmPassword
                      }
                    />
                    <Item style={styles.item}>
                      <CheckBox
                        name="terms"
                        style={styles.checkBox}
                        onPress={() => setFieldValue("terms", !values.terms)}
                        checked={values.terms}
                        color="green"
                      ></CheckBox>
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
                    <ErrorMessage errorValue={touched.terms && errors.terms} />

                    <Button
                      rounded
                      light
                      block
                      disabled={!isValid || isSubmitting}
                      style={styles.createAccount}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.bold}>Create Account</Text>
                      {isSubmitting && <Spinner color="white" />}
                    </Button>

                    <View style={styles.socialButtons}>
                      <SocialButtons></SocialButtons>
                    </View>
                  </Form>
                </Fragment>
              )}
            </Formik>
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
    height: 70,
    resizeMode: "contain",
    flex: 1
  },

  form: {
    width: "100%",
    height: "100%"
  },

  item: {
    marginTop: 10,
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
    alignItems: "center",
    paddingLeft: 0,
    left: 0,
    marginRight: 5,
    borderColor: "white",
    borderRadius: 5,
    borderWidth: 2
  },

  termsOfService: {
    paddingRight: 0,
    paddingLeft: 0
  },

  createAccount: {
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 15
  },

  socialButtons: {
    marginTop: 40
  }
});

export default SignUp;

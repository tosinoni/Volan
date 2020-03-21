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
import { StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import SocialButtons from "../components/SocialButtons";
import Intro from "../components/Intro";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import { withFirebaseHOC } from "../config/Firebase";
import PhoneInput from "react-native-phone-input";
import Storage from "../utils/Storage";
import DropdownAlert from "react-native-dropdownalert";
import { Header as NavigationHeader } from "react-navigation-stack";
import { ScrollView } from "react-native";

let phoneFn;
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label("Name")
    .required()
    .min(2, "Must have at least 2 characters"),
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  phoneNumber: Yup.string()
    .label("PhoneNumber")
    .required("Please enter a phone number")
    .test("test-name", "Please enter a valid phone number", value =>
      phoneFn.isValidNumber()
    ),
  password: Yup.string()
    .label("Password")
    .required()
    .min(6, "Password must have more than 6 characters "),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must match Password")
    .required("Confirm Password is required"),
  terms: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions")
});

export class SignUp extends Component {
  handleOnSignup = async (values, actions) => {
    const { name, email, password } = values;

    try {
      await Storage.setIsNewUser(true);
      const response = await this.props.firebase.signupWithEmail(
        email,
        password
      );

      if (response.user) {
        const { uid } = response.user;
        const phoneNumber = phoneFn.getValue();
        const userData = { email, name, uid, phoneNumber };
        await this.props.firebase.createNewUser(userData);
      }
    } catch (error) {
      this.showErrorMessage(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  showErrorMessage = error => {
    let errorMessage;

    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "Email exists already.";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email provided.";
        break;

      case "auth/weak-password":
        errorMessage = "Weak password provided.";
        break;
      default:
        errorMessage = "Registration failed. Contact Volan customer care";
    }

    this.showErrorToast(errorMessage);
  };

  showErrorToast = errorMessage => {
    this.dropDownAlertRef.alertWithType("error", "Signup failed", errorMessage);
  };

  render() {
    return (
      <View style={styles.content}>
        <View style={styles.logoImageBackground}>
          <Image
            style={styles.logoImage}
            source={require("../assets/images/logo-2.png")}
          />
        </View>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            terms: false
          }}
          onSubmit={(values, actions) => {
            this.handleOnSignup(values, actions);
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
                  <Label style={styles.Label}>Phone Number</Label>
                  <PhoneInput
                    ref={ref => {
                      phoneFn = ref;
                    }}
                    onChangePhoneNumber={handleChange("phoneNumber")}
                    style={styles.input}
                    textStyle={styles.phoneInput}
                    autoFormat={true}
                  />
                </Item>
                <ErrorMessage errorValue={errors.phoneNumber} />

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
                  errorValue={touched.confirmPassword && errors.confirmPassword}
                />
                <Item style={[styles.item, styles.termsRow]}>
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
                    style={styles.termsButton}
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

                <SocialButtons
                  showErrorToast={this.showErrorToast}
                ></SocialButtons>
              </Form>
            </Fragment>
          )}
        </Formik>
        <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} showCancel />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#b82f25",
    width: "100%",
    height: "100%"
  },

  logoImageBackground: {
    alignItems: "center",
    marginTop: 20
  },

  logoImage: {
    width: "100%",
    height: 70,
    resizeMode: "contain"
  },

  form: {
    flex: 1,
    justifyContent: "space-evenly",
    width: "100%"
  },

  item: {
    marginLeft: 0,
    height: 50,
    borderBottomWidth: 0
  },

  termsRow: {
    alignItems: "center"
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
    paddingLeft: 10,
    width: "100%"
  },

  phoneInput: {
    height: 35,
    width: "100%",
    color: "white"
  },

  Label: {
    textAlign: "center",
    color: "white"
  },

  bold: {
    fontWeight: "bold"
  },

  checkBox: {
    alignItems: "center",
    paddingLeft: 0,
    left: 0,
    marginRight: 10,
    borderColor: "white",
    borderRadius: 5,
    borderWidth: 2
  },

  termsOfService: {
    paddingRight: 0,
    paddingLeft: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  },

  createAccount: {
    borderRadius: 10
  },
  termsButton: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withFirebaseHOC(SignUp);

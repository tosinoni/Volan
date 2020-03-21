import React, { Component, Fragment } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import DropdownAlert from "react-native-dropdownalert";
import { withFirebaseHOC } from "../config/Firebase";
import {
  Container,
  Content,
  Item,
  Input,
  Label,
  Form,
  Button,
  Spinner
} from "native-base";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email")
});

export class ForgotPassword extends Component {
  handlePasswordReset = async (values, actions) => {
    const { email } = values;
    try {
      await this.props.firebase.passwordReset(email);
      console.log("Password reset email sent successfully");
      this.props.navigation.navigate("Login");
    } catch (error) {
      console.log(error.code);
      this.showErrorMessage(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  showErrorMessage = error => {
    let errorMessage;

    switch (error.code) {
      case "auth/user-not-found":
        errorMessage = "Email is not registered.";
        break;

      default:
        errorMessage = "Could not reset password :o";
    }
    this.dropDownAlertRef.alertWithType(
      "error",
      "Forgot Password Failed",
      errorMessage
    );
  };
  render() {
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
            initialValues={{ email: "" }}
            onSubmit={(values, actions) => {
              this.handlePasswordReset(values, actions);
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
                <Form style={styles.form}>
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
                  <Button
                    rounded
                    light
                    block
                    disabled={!isValid || isSubmitting}
                    style={styles.forgotPassword}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.bold}>Forgot Password</Text>
                    {isSubmitting && <Spinner color="white" />}
                  </Button>
                </Form>
              </Fragment>
            )}
          </Formik>
          <DropdownAlert
            ref={ref => (this.dropDownAlertRef = ref)}
            showCancel
          />
        </Content>
      </Container>
    );
  }
}

export default withFirebaseHOC(ForgotPassword);

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
    justifyContent: "space-evenly",
    width: "100%",
    height: 150
  },
  item: {
    marginLeft: 0,
    height: 50,
    borderBottomWidth: 0
  },
  Label: {
    textAlign: "center",
    color: "white"
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
  forgotPassword: {
    borderRadius: 10
  },
  bold: {
    fontWeight: "bold"
  }
});

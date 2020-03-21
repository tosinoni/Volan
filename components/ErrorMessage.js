import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ErrorMessage = ({ errorValue, style }) => (
  <View style={styles.container}>
    <Text style={[styles.errorText, style]}>{errorValue}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 25
  },
  errorText: {
    color: "yellow"
  }
});

export default ErrorMessage;

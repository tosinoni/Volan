import React, { Component } from "react";
import { View, Text } from "react-native";
import LocationInput from "../../components/LocationInput";

export class CreateItemTwo extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LocationInput />
      </View>
    );
  }
}

export default CreateItemTwo;

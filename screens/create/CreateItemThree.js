import React, { Component } from "react";
import { View, Text } from "react-native";
import OptionsList from "../../components/OptionsList";

const availableOptionsList = [
  "Air Conditioning",
  "Alloy Wheels",
  "Backup Camera",
  "Cruise Control",
  "DVD/Entertainment",
  "Heated Seats",
  "Keyless Entry",
  "Leather Seats",
  "Navigation System",
  "Parking Sensors",
  "Power Seats",
  "Power Windows",
  "Sunroof/Moonroof",
];
export class CreateItemThree extends Component {
  state = {
    availableOptions: availableOptionsList,
    selectedOptions: []
  };

  onItemSelected = (availableOptions, selectedOptions) => {
    this.setState({ availableOptions, selectedOptions });
  };

  render() {
    const { availableOptions, selectedOptions } = this.state;

    return (
      <OptionsList
        initialText="AVAILABLE OPTIONS"
        selectedText="SELECTED OPTIONS"
        selectedColor="#1cba99"
        initialList={availableOptions}
        selectedList={selectedOptions}
        onItemSelected={this.onItemSelected}
      />
    );
  }
}

export default CreateItemThree;

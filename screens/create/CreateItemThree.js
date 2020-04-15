import React, { Component } from "react";
import { View, Text } from "react-native";
import OptionsList from "../../components/OptionsList";

const availableOptionsList = [
  "Leather Seats",
  "Sunroof/Moonroof",
  "Navigation System",
  "DVD/Entertainment",
  "Power Seats",
  "Heated Seats",
  "Backup Camera",
  "Parking Sensors",
  "Air Conditioning",
  "Alloy Wheels",
  "Power Windows",
  "Keyless Entry",
  "Cruise Control"
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
        initialList={availableOptions}
        selectedList={selectedOptions}
        onItemSelected={this.onItemSelected}
      />
    );
  }
}

export default CreateItemThree;

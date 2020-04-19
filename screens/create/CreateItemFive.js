import React, { Component } from "react";
import OptionsList from "../../components/OptionsList";

const availableOptionsList = [
  "5 Digit Odomoter",
  "Air Conditioning Needs Repair",
  "Branded Irreperable, Salvage or Rebuilt",
  "Cluster in Miles",
  "Engine Knocking",
  "Former Daily Rental",
  "Former Leased Vehicle",
  "Former Police or EMS Vehicle",
  "Former Taxi or Limo",
  "Former US Vehicle",
  "Non Runner",
  "Odometer Rolled Back",
  "Suspension Needs Repair",
  "Transmission Needs Repair"
];
export class CreateItemFive extends Component {
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
        initialText="DECLARATIONS"
        selectedText="SELECTED"
        selectedColor="#e57067"
        initialList={availableOptions}
        selectedList={selectedOptions}
        onItemSelected={this.onItemSelected}
      />
    );
  }
}

export default CreateItemFive;

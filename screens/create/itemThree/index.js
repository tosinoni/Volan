import React, { PureComponent } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OptionsList from "../../../components/OptionsList";

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

export class CreateItemThree extends PureComponent {
  onItemSelected = (availableOptions, selectedOptions) => {
    const { onMultipleValuesChange } = this.props;
    onMultipleValuesChange({ availableOptions, selectedOptions });
  };

  getDefaultView = () => {
    const {
      availableOptions = availableOptionsList,
      selectedOptions,
    } = this.props;

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
  };

  renderViewType = () => {
    return this.getDefaultView();
  };

  render() {
    const {} = this.props;
    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        {this.renderViewType()}
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemThree;

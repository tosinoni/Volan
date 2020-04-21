import React, { PureComponent } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OptionsList from "../../../components/OptionsList";
import { withCreateItemHOC } from "../context";

const declarationOptionsList = [
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
  "Transmission Needs Repair",
];

export class CreateItemFive extends PureComponent {
  onItemSelected = (declarationOptions, selectedOptions) => {
    const { onMultipleValuesChange } = this.props.createItem;
    onMultipleValuesChange({ declarationOptions, selectedOptions });
  };

  getDefaultView = () => {
    const {
      declarationOptions = declarationOptionsList,
      selectedOptions,
    } = this.props.createItem;

    return (
      <OptionsList
        initialText="DECLARATIONS"
        selectedText="SELECTED"
        selectedColor="#e57067"
        initialList={declarationOptions}
        selectedList={selectedOptions}
        onItemSelected={this.onItemSelected}
      />
    );
  };

  renderViewType = () => {
    return this.getDefaultView();
  };

  render() {
    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        {this.renderViewType()}
      </KeyboardAwareScrollView>
    );
  }
}

export default withCreateItemHOC(CreateItemFive);

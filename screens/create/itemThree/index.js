import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OptionsList from "../../../components/OptionsList";
import { useFormikContext } from "formik";

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

const CreateItemThree = () => {
  getDefaultView = () => {
    const { values, handleChange } = useFormikContext();
    const { selectedVehicleType } = values;

    const { selectedOptions } = values[selectedVehicleType];
    const selectedOptionsList = selectedOptions
      ? JSON.parse(selectedOptions)
      : [];

    const availableOptions = availableOptionsList.filter(function (item) {
      return !selectedOptionsList.includes(item);
    });

    return (
      <OptionsList
        initialText="AVAILABLE OPTIONS"
        selectedText="SELECTED OPTIONS"
        selectedColor="#1cba99"
        initialList={availableOptions}
        selectedList={selectedOptionsList}
        onItemSelected={handleChange(`${selectedVehicleType}.selectedOptions`)}
      />
    );
  };

  renderViewType = () => {
    return getDefaultView();
  };

  return (
    <KeyboardAwareScrollView viewIsInsideTabBar>
      {renderViewType()}
    </KeyboardAwareScrollView>
  );
};

export default CreateItemThree;

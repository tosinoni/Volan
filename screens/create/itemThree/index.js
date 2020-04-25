import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OptionsList from "../../../components/OptionsList";
import { useFormContext, Controller } from "react-hook-form";

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
  const { setValue, getValues } = useFormContext();
  const values = getValues({ nest: true }) || {};
  const { selectedVehicleType } = values;
  const { selectedOptions } = values[selectedVehicleType] || {};

  getDefaultView = () => {
    const selectedOptionsList = selectedOptions
      ? JSON.parse(selectedOptions)
      : [];

    const availableOptions = availableOptionsList.filter(function (item) {
      return !selectedOptionsList.includes(item);
    });

    return (
      <Controller
        as={
          <OptionsList
            initialText="AVAILABLE OPTIONS"
            selectedText="SELECTED OPTIONS"
            selectedColor="#1cba99"
            initialList={availableOptions}
            selectedList={selectedOptionsList}
            onItemSelected={(value) =>
              setValue(`${selectedVehicleType}.selectedOptions`, value)
            }
          />
        }
        name={`${selectedVehicleType}.selectedOptions`}
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

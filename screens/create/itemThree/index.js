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
  const { vehicleType } = values;
  const { options } = values[vehicleType] || {};

  getDefaultView = () => {
    const optionsList = options || [];

    const availableOptions = availableOptionsList.filter(function (item) {
      return !optionsList.includes(item);
    });

    return (
      <Controller
        as={
          <OptionsList
            initialText="AVAILABLE OPTIONS"
            selectedText="SELECTED OPTIONS"
            selectedColor="#1cba99"
            initialList={availableOptions}
            selectedList={optionsList}
            onItemSelected={(value) =>
              setValue(`${vehicleType}.options`, value)
            }
          />
        }
        name={`${vehicleType}.options`}
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

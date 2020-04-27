import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OptionsList from "../../../components/OptionsList";
import { useFormContext, Controller } from "react-hook-form";

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

const CreateItemFive = () => {
  const { setValue, getValues } = useFormContext();
  const values = getValues({ nest: true }) || {};
  const { vehicleType } = values;
  const { declarations } = values[vehicleType] || {};

  getDefaultView = () => {
    const declarationsList = declarations || [];

    const declarationOptions = declarationOptionsList.filter(function (item) {
      return !declarationsList.includes(item);
    });

    return (
      <Controller
        as={
          <OptionsList
            initialText="DECLARATIONS"
            selectedText="SELECTED"
            selectedColor="#e57067"
            initialList={declarationOptions}
            selectedList={declarationsList}
            onItemSelected={(value) =>
              setValue(`${vehicleType}.declarations`, value)
            }
          />
        }
        name={`${vehicleType}.declarations`}
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

export default CreateItemFive;

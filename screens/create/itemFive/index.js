import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import OptionsList from "../../../components/OptionsList";
import { useFormikContext } from "formik";

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
  getDefaultView = () => {
    const { values, handleChange } = useFormikContext();
    const { selectedVehicleType } = values;

    const { selectedDeclarations } = values[selectedVehicleType];
    const selectedDeclarationsList = selectedDeclarations
      ? JSON.parse(selectedDeclarations)
      : [];

    const declarationOptions = declarationOptionsList.filter(function (item) {
      return !selectedDeclarationsList.includes(item);
    });

    return (
      <OptionsList
        initialText="DECLARATIONS"
        selectedText="SELECTED"
        selectedColor="#e57067"
        initialList={declarationOptions}
        selectedList={selectedDeclarationsList}
        onItemSelected={handleChange(
          `${selectedVehicleType}.selectedDeclarations`
        )}
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

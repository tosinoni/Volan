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
  const { selectedVehicleType } = values;
  const { selectedDeclarations } = values[selectedVehicleType] || {};

  getDefaultView = () => {
    const selectedDeclarationsList = selectedDeclarations
      ? JSON.parse(selectedDeclarations)
      : [];

    const declarationOptions = declarationOptionsList.filter(function (item) {
      return !selectedDeclarationsList.includes(item);
    });

    return (
      <Controller
        as={
          <OptionsList
            initialText="DECLARATIONS"
            selectedText="SELECTED"
            selectedColor="#e57067"
            initialList={declarationOptions}
            selectedList={selectedDeclarationsList}
            onItemSelected={(value) =>
              setValue(`${selectedVehicleType}.selectedDeclarations`, value)
            }
          />
        }
        name={`${selectedVehicleType}.selectedDeclarations`}
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

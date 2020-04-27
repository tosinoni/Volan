import React from "react";
import { VEHICLE_TYPES } from "../../../constants/";
import CarItemTwo from "./Car";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Form } from "native-base";
import { styles } from "../../../styles/screens/create/itemTwo";
import { View, Text } from "react-native";
import CircularButtonList from "../../../components/CircularButtonList";
import { useFormContext, Controller } from "react-hook-form";

const colors = [
  { text: "Black", color: "black" },
  { text: "Blue", color: "blue" },
  { text: "Brown", color: "brown" },
  { text: "Gray", color: "grey" },
  { text: "Gold", color: "gold" },
  { text: "Red", color: "red" },
  { text: "White", color: "white" },
  { text: "Pink", color: "pink" },
  { text: "Green", color: "green" },
  { text: "Beige", color: "beige" },
];

const CreateItemTwo = () => {
  const { setValue, getValues } = useFormContext();
  const values = getValues({ nest: true }) || {};
  const { vehicleType } = values;
  const { exteriorColor } = values[vehicleType] || {};

  getDefaultView = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>EXTERIOR COLOR</Text>
        <View style={styles.circularFormSection}>
          <Controller
            as={
              <CircularButtonList
                list={colors}
                isBadgeSelection
                selectedItem={exteriorColor}
                onItemSelected={(value) =>
                  setValue(`${vehicleType}.exteriorColor`, value)
                }
              />
            }
            name={`${vehicleType}.exteriorColor`}
          />
        </View>
      </View>
    );
  };

  renderViewType = () => {
    switch (vehicleType) {
      case VEHICLE_TYPES.CAR:
        return <CarItemTwo />;
      default:
        return getDefaultView();
    }
  };

  return (
    <KeyboardAwareScrollView viewIsInsideTabBar>
      <Form>{renderViewType()}</Form>
    </KeyboardAwareScrollView>
  );
};

export default CreateItemTwo;

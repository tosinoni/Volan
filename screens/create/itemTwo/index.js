import React from "react";
import { VEHICLE_TYPES } from "../../../constants/";
import CarItemTwo from "./Car";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Form } from "native-base";
import { styles } from "../../../styles/screens/create/itemTwo";
import { View, Text } from "react-native";
import CircularButtonList from "../../../components/CircularButtonList";
import { useFormikContext } from "formik";

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
  getDefaultView = (values, handleChange) => {
    const { selectedVehicleType } = values;
    const { selectedExteriorColor } = values[selectedVehicleType];

    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>EXTERIOR COLOR</Text>
        <View style={styles.circularFormSection}>
          <CircularButtonList
            list={colors}
            isBadgeSelection
            selectedItem={selectedExteriorColor}
            onItemSelected={handleChange(
              `${selectedVehicleType}.selectedExteriorColor`
            )}
          />
        </View>
      </View>
    );
  };

  renderViewType = () => {
    const { values, handleChange } = useFormikContext();
    const { selectedVehicleType } = values;

    switch (selectedVehicleType) {
      case VEHICLE_TYPES.CAR:
        return <CarItemTwo />;
      default:
        return getDefaultView(values, handleChange);
    }
  };

  return (
    <KeyboardAwareScrollView viewIsInsideTabBar>
      <Form>{renderViewType()}</Form>
    </KeyboardAwareScrollView>
  );
};

export default CreateItemTwo;

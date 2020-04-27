import React, { PureComponent } from "react";
import { VEHICLE_TYPES } from "../../../constants";
import CarItemOne from "./Car";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Form } from "native-base";
import { styles } from "../../../styles/screens/create/itemOne";
import { View, Text } from "react-native";
import CircularButtonList from "../../../components/CircularButtonList";
import { Label } from "native-base";
import SelectDropDown from "../../../components/SelectDropDown";
import { useFormContext, Controller } from "react-hook-form";
import { VAIDATION_FIELDS } from "../validation";

const vehicleTypes = [
  {
    text: VEHICLE_TYPES.CAR,
    icon: require("../../../assets/images/vehicles/car.png"),
  },
  {
    text: VEHICLE_TYPES.BICYCLE,
    icon: require("../../../assets/images/vehicles/bicycle.png"),
  },
  {
    text: VEHICLE_TYPES.MOTORCYCLE,
    icon: require("../../../assets/images/vehicles/motorcycle.png"),
  },
  {
    text: VEHICLE_TYPES.TRUCK,
    icon: require("../../../assets/images/vehicles/truck.png"),
  },
  {
    text: VEHICLE_TYPES.TRAILER,
    icon: require("../../../assets/images/vehicles/trailer.png"),
  },
  {
    text: VEHICLE_TYPES.BUS,
    icon: require("../../../assets/images/vehicles/bus.png"),
  },
  {
    text: VEHICLE_TYPES.BOAT,
    icon: require("../../../assets/images/vehicles/boat.png"),
  },
  {
    text: VEHICLE_TYPES.AIRCRAFT,
    icon: require("../../../assets/images/vehicles/aircraft.png"),
  },
];

const years = [
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
  { label: "2016", value: "2016" },
  { label: "2015", value: "2015" },
  { label: "2014", value: "2014" },
];

const CreateItemOne = () => {
  const { setValue, control, getValues, triggerValidation } = useFormContext();
  const values = getValues({ nest: true }) || {};
  const { mode, vehicleType } = values;
  const { year } = values[vehicleType] || {};

  getDefaultView = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>MAKE / MODEL</Text>
        <View style={styles.formSection}>
          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Year</Label>
            <Controller
              as={
                <SelectDropDown
                  headerTitle="Select Year"
                  selectedValue={year}
                  items={years}
                  onValueChange={(value) => {
                    setValue(`${vehicleType}.year`, value);
                  }}
                  mode={mode}
                />
              }
              name={`${vehicleType}.year`}
            />
          </View>
        </View>
      </View>
    );
  };

  renderViewType = () => {
    switch (vehicleType) {
      case VEHICLE_TYPES.CAR:
        return <CarItemOne />;
      default:
        return getDefaultView();
    }
  };

  // const { values, handleChange } = useFormikContext();
  return (
    <KeyboardAwareScrollView viewIsInsideTabBar>
      <Form>
        <View style={styles.section}>
          <Text style={styles.sectionText}>VEHICLE TYPE</Text>
          <View style={styles.circularFormSection}>
            <Controller
              control={control}
              as={
                <CircularButtonList
                  list={vehicleTypes}
                  isButtonSelection
                  selectedItem={vehicleType}
                  onItemSelected={async (text) => {
                    setValue("vehicleType", text);
                    await triggerValidation(VAIDATION_FIELDS);
                  }}
                />
              }
              name="vehicleType"
            />
          </View>
        </View>
        {renderViewType()}
      </Form>
    </KeyboardAwareScrollView>
  );
};

export default CreateItemOne;

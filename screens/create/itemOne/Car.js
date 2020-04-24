import React, { Fragment } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../../styles/screens/create/itemOne/Car";
import { Item, Label, Input } from "native-base";
import SelectDropDown from "../../../components/SelectDropDown";
import { useFormikContext } from "formik";

const years = [
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
  { label: "2016", value: "2016" },
  { label: "2015", value: "2015" },
  { label: "2014", value: "2014" },
];

const makes = [
  { label: "Audi", value: "Audi" },
  { label: "Toyota", value: "Toyota" },
  { label: "Nissan", value: "Nissan" },
  { label: "Mercedez Benz", value: "Mercedez Benz" },
  { label: "BMW", value: "BMW" },
  { label: "Honda", value: "Honda" },
  { label: "Hyundai", value: "Hyundai" },
  { label: "Lexus", value: "Lexus" },
];

const CarItemOne = () => {
  const { values, handleChange } = useFormikContext();
  const { mode, selectedVehicleType } = values;
  const { year, make, model, submodel, trim, price, vin, carfaxUrl } = values[
    selectedVehicleType
  ];

  return (
    <Fragment>
      <View style={styles.section}>
        <Text style={styles.sectionText}>VIN</Text>
        <View style={styles.formSection}>
          <Item stackedLabel style={styles.formItem}>
            <Label style={styles.inputLabel}>VIN</Label>
            <Input
              style={styles.input}
              onChangeText={handleChange(`${selectedVehicleType}.vin`)}
              value={vin}
            />
          </Item>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>MAKE / MODEL</Text>
        <View style={styles.formSection}>
          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Year</Label>
            <SelectDropDown
              itemKey="year"
              headerTitle="Select Year"
              selectedValue={year}
              items={years}
              onValueChange={handleChange(`${selectedVehicleType}.year`)}
              mode={mode}
            />
          </View>

          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Make</Label>
            <SelectDropDown
              headerTitle="Select Make"
              itemKey="make"
              selectedValue={make}
              items={makes}
              onValueChange={handleChange(`${selectedVehicleType}.make`)}
              mode={mode}
            />
          </View>

          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Model</Label>
            <SelectDropDown
              itemKey="model"
              headerTitle="Select Model"
              selectedValue={model}
              onValueChange={handleChange(`${selectedVehicleType}.model`)}
              mode={mode}
            />
          </View>

          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Submodel</Label>
            <SelectDropDown
              itemKey="submodel"
              headerTitle="Select Submodel"
              selectedValue={submodel}
              onValueChange={handleChange(`${selectedVehicleType}.submodel`)}
              mode={mode}
            />
          </View>

          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Trim</Label>
            <SelectDropDown
              headerTitle="Select Trim"
              itemKey="trim"
              selectedValue={trim}
              onValueChange={handleChange(`${selectedVehicleType}.trim`)}
              mode={mode}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>PRICE</Text>
        <View style={styles.formSection}>
          <Item stackedLabel style={styles.formItem}>
            <Label style={styles.inputLabel}>PRICE</Label>
            <Input
              style={styles.input}
              onChangeText={handleChange(`${selectedVehicleType}.price`)}
              value={price}
            />
          </Item>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>CARFAX</Text>
        <View style={styles.formSection}>
          <Item stackedLabel style={styles.formItem}>
            <Label style={styles.inputLabel}>CARFAX Canada Report URL</Label>

            <Item style={styles.carfaxContainer}>
              <Input
                value={carfaxUrl}
                style={styles.carfaxInput}
                onChangeText={handleChange(`${selectedVehicleType}.carfaxUrl`)}
              />
              <Image
                style={styles.carfaxLogo}
                source={require("../../../assets/images/carfax-canada.png")}
              />
            </Item>
          </Item>
        </View>
      </View>
    </Fragment>
  );
};

export default CarItemOne;

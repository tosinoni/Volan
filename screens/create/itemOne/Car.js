import React, { Fragment } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../../styles/screens/create/itemOne/Car";
import { Item, Label, Input } from "native-base";
import SelectDropDown from "../../../components/SelectDropDown";
import { useFormContext, Controller } from "react-hook-form";

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
  const { setValue, getValues, errors } = useFormContext();

  const values = getValues({ nest: true }) || {};

  const { mode, vehicleType } = values;
  const { year, make, model, submodel, trim } = values[vehicleType] || {};

  const {
    price: isPriceInputInvalid,
    year: isYearInputInvalid,
    make: isMakeInputInvalid,
  } = errors[vehicleType] || {};

  return (
    <Fragment>
      <View style={styles.section}>
        <Text style={styles.sectionText}>VIN</Text>
        <View style={styles.formSection}>
          <Item stackedLabel style={styles.formItem}>
            <Label style={styles.inputLabel}>VIN</Label>
            <Controller
              as={
                <Input
                  onChangeText={(value) => setValue("Car.vin", value)}
                  style={styles.input}
                />
              }
              name={"Car.vin"}
            />
          </Item>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>MAKE / MODEL</Text>
        <View style={styles.formSection}>
          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Year</Label>
            <Controller
              as={
                <SelectDropDown
                  error={isYearInputInvalid}
                  headerTitle="Select Year"
                  selectedValue={year}
                  items={years}
                  onValueChange={(value) => setValue("Car.year", value, true)}
                  mode={mode}
                />
              }
              name={"Car.year"}
            />
          </View>

          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Make</Label>
            <Controller
              as={
                <SelectDropDown
                  error={isMakeInputInvalid}
                  headerTitle="Select Make"
                  selectedValue={make}
                  items={makes}
                  onValueChange={(value) => setValue(`Car.make`, value, true)}
                  mode={mode}
                />
              }
              name={`Car.make`}
            />
          </View>

          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Model</Label>
            <Controller
              as={
                <SelectDropDown
                  headerTitle="Select Model"
                  selectedValue={model}
                  onValueChange={(value) => setValue(`Car.model`, value)}
                  mode={mode}
                />
              }
              name={`Car.model`}
            />
          </View>

          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Submodel</Label>
            <Controller
              as={
                <SelectDropDown
                  itemKey="submodel"
                  headerTitle="Select Submodel"
                  selectedValue={submodel}
                  onValueChange={(value) => setValue(`Car.submodel`, value)}
                  mode={mode}
                />
              }
              name={`Car.submodel`}
            />
          </View>

          <View style={styles.formItem}>
            <Label style={styles.inputLabel}>Trim</Label>
            <Controller
              as={
                <SelectDropDown
                  headerTitle="Select Trim"
                  itemKey="trim"
                  selectedValue={trim}
                  onValueChange={(value) => setValue(`Car.trim`, value)}
                  mode={mode}
                />
              }
              name={`Car.trim`}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>PRICE</Text>
        <View style={styles.formSection}>
          <Item stackedLabel style={styles.formItem}>
            <Label style={styles.inputLabel}>PRICE</Label>

            <Controller
              as={
                <Input
                  keyboardType="numeric"
                  onChangeText={(value) => setValue("Car.price", value, true)}
                  style={[
                    styles.input,
                    isPriceInputInvalid && styles.errorInput,
                  ]}
                />
              }
              name={"Car.price"}
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
              <Controller
                as={
                  <Input
                    onChangeText={(text) => setValue("Car.carfaxUrl", text)}
                    style={styles.carfaxInput}
                  />
                }
                name={"Car.carfaxUrl"}
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

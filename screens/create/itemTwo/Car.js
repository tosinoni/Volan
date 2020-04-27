import React, { Fragment, PureComponent } from "react";
import { View, Text } from "react-native";
import { Item, Label, Input, Button } from "native-base";
import { styles } from "../../../styles/screens/create/itemTwo/Car";
import CircularButtonList from "../../../components/CircularButtonList";
import SelectDropDown from "../../../components/SelectDropDown";
import CountInput from "../../../components/CountInput";
import { useFormContext, Controller } from "react-hook-form";

const km = "km";
const mi = "mi";

const bodyTypes = [
  { label: "Convertible", value: "Convertible" },
  { label: "Coupe", value: "Coupe" },
  { label: "Hatchback", value: "Hatchback" },
  { label: "Sedan", value: "Sedan" },
  { label: "SUV", value: "SUV" },
];

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

const transmissions = [
  { label: "Automatic", value: "Automatic" },
  { label: "Manual", value: "Manual" },
];

const fuelTypes = [
  { label: "Diesel", value: "Diesel" },
  { label: "Electric", value: "Electric" },
  { label: "Electric Hybrid", value: "ElectricHybrid" },
  { label: "Flex Fuel", value: "FlexFuel" },
  { label: "Gasoline", value: "Gasoline" },
  { label: "Hydrogen", value: "hydrogen" },
  { label: "Natural Gas", value: "NaturalGas" },
  { label: "Propane", value: "Propane" },
];

const drivetrains = [
  { label: "4x4", value: "4x4" },
  { label: "AWD", value: "AWD" },
  { label: "FWD", value: "FWD" },
  { label: "RWD", value: "RWD" },
];

const CarItemTwo = () => {
  const { setValue, getValues } = useFormContext();

  const values = getValues({ nest: true }) || {};

  const { mode, vehicleType } = values;
  const {
    numberOfCylinders,
    displacement,
    mileageType = "km",
    bodyType,
    exteriorColor,
    interiorColor,
    numberOfDoors,
    numberOfPassengers,
    transmission,
    drivetrain,
    fueltype,
  } = values[vehicleType] || {};

  const isKmSelected = mileageType === km;
  const isMiSelected = mileageType === mi;

  return (
    <Fragment>
      <View style={styles.section}>
        <Text style={styles.sectionText}>MILEAGE</Text>
        <View style={styles.formSection}>
          <Item stackedLabel style={styles.formItem}>
            <Label style={styles.inputLabel}>Vehicle Mileage</Label>
            <View style={styles.mileageInput}>
              <Controller
                as={
                  <Input
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={(value) => setValue("Car.mileage", value)}
                  />
                }
                name={"Car.mileage"}
              />
              <Controller
                as={
                  <Fragment>
                    <Button
                      rounded
                      style={
                        isKmSelected
                          ? styles.selectedMileageButton
                          : styles.unSelectedMileageButton
                      }
                      onPress={() => setValue("Car.mileageType", "km")}
                    >
                      <Text style={styles.text}>km</Text>
                    </Button>
                    <Button
                      rounded
                      danger
                      style={
                        isMiSelected
                          ? styles.selectedMileageButton
                          : styles.unSelectedMileageButton
                      }
                      onPress={() => setValue("Car.mileageType", "mi")}
                    >
                      <Text style={styles.text}>mi</Text>
                    </Button>
                  </Fragment>
                }
                name={"Car.mileageType"}
              />
            </View>
          </Item>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>BODY TYPE</Text>
        <View style={styles.formSection}>
          <View stackedLabel style={styles.formItem}>
            <Label style={styles.inputLabel}>Body Type</Label>
            <Controller
              as={
                <SelectDropDown
                  headerTitle="Select Body Type"
                  selectedValue={bodyType}
                  items={bodyTypes}
                  onValueChange={(value) => setValue("Car.bodyType", value)}
                  mode={mode}
                />
              }
              name={"Car.bodyType"}
            />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>EXTERIOR COLOR</Text>
        <View style={styles.circularFormSection}>
          <Controller
            as={
              <CircularButtonList
                list={colors}
                isBadgeSelection
                selectedItem={exteriorColor}
                onItemSelected={(value) => setValue("Car.exteriorColor", value)}
              />
            }
            name={"Car.exteriorColor"}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>INTERIOR COLOR</Text>
        <View style={styles.circularFormSection}>
          <Controller
            as={
              <CircularButtonList
                list={colors}
                isBadgeSelection
                selectedItem={interiorColor}
                onItemSelected={(value) => setValue("Car.interiorColor", value)}
              />
            }
            name={"Car.interiorColor"}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>OTHER</Text>
        <View style={styles.formSection}>
          <View style={styles.formItemsRow}>
            <Item stackedLabel style={styles.formItemLeft}>
              <Label style={styles.inputLabel}>Number of Doors</Label>
              <Controller
                as={
                  <CountInput
                    value={numberOfDoors}
                    onValueChange={(value) =>
                      setValue("Car.numberOfDoors", value)
                    }
                  />
                }
                name={"Car.numberOfDoors"}
              />
            </Item>
            <Item stackedLabel style={styles.formItemRight}>
              <Label style={styles.inputLabel}>Number of Passengers</Label>
              <Controller
                as={
                  <CountInput
                    value={numberOfPassengers}
                    onValueChange={(value) =>
                      setValue("Car.numberOfPassengers", value)
                    }
                  />
                }
                name={"Car.numberOfPassengers"}
              />
            </Item>
          </View>
          <View style={styles.formItemsRow}>
            <View stackedLabel style={styles.formItemLeft}>
              <Label style={styles.inputLabel}>Transmission</Label>
              <Controller
                as={
                  <SelectDropDown
                    headerTitle="Select Transmission"
                    selectedValue={transmission}
                    items={transmissions}
                    onValueChange={(value) =>
                      setValue("Car.transmission", value)
                    }
                    mode={mode}
                  />
                }
                name={"Car.transmission"}
              />
            </View>

            <View stackedLabel style={styles.formItemRight}>
              <Label style={styles.inputLabel}>Drivetrain</Label>
              <Controller
                as={
                  <SelectDropDown
                    headerTitle="Select Drivetrain"
                    selectedValue={drivetrain}
                    items={drivetrains}
                    onValueChange={(value) => setValue("Car.drivetrain", value)}
                    mode={mode}
                  />
                }
                name={"Car.drivetrain"}
              />
            </View>
          </View>
          <View style={styles.formItemsRow}>
            <Item stackedLabel style={styles.formItemLeft}>
              <Label style={styles.inputLabel}>Displacement</Label>
              <Controller
                as={
                  <CountInput
                    increment={0.1}
                    decimals={1}
                    value={displacement}
                    onValueChange={(value) =>
                      setValue("Car.displacement", value)
                    }
                  />
                }
                name={"Car.displacement"}
              />
            </Item>
            <Item stackedLabel style={styles.formItemRight}>
              <Label style={styles.inputLabel}>Number of Cylinders</Label>
              <Controller
                as={
                  <CountInput
                    value={numberOfCylinders}
                    onValueChange={(value) =>
                      setValue("Car.numberOfCylinders", value)
                    }
                  />
                }
                name={"Car.numberOfCylinders"}
              />
            </Item>
          </View>
          <View style={styles.formItemsRow}>
            <View stackedLabel style={styles.formItem}>
              <Label style={styles.inputLabel}>Fuel Type</Label>
              <Controller
                as={
                  <SelectDropDown
                    headerTitle="Select Fuel Type"
                    items={fuelTypes}
                    selectedValue={fueltype}
                    onValueChange={(value) => setValue("Car.fueltype", value)}
                    mode={mode}
                  />
                }
                name={"Car.fueltype"}
              />
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default CarItemTwo;

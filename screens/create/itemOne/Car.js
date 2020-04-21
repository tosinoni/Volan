import React, { Fragment, PureComponent } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../../../styles/screens/create/itemOne/Car";
import { Item, Label, Input } from "native-base";
import SelectDropDown from "../../../components/SelectDropDown";

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

export class CarItemOne extends PureComponent {
  render() {
    const {
      year,
      make,
      model,
      submodel,
      trim,
      mode,
      onInputChange,
    } = this.props;

    return (
      <Fragment>
        <View style={styles.section}>
          <Text style={styles.sectionText}>VIN</Text>
          <View style={styles.formSection}>
            <Item stackedLabel style={styles.formItem}>
              <Label style={styles.inputLabel}>VIN</Label>
              <Input style={styles.input} />
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
                onValueChange={onInputChange}
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
                onValueChange={onInputChange}
                mode={mode}
              />
            </View>

            <View style={styles.formItem}>
              <Label style={styles.inputLabel}>Model</Label>
              <SelectDropDown
                itemKey="model"
                headerTitle="Select Model"
                selectedValue={model}
                onValueChange={onInputChange}
                mode={mode}
              />
            </View>

            <View style={styles.formItem}>
              <Label style={styles.inputLabel}>Submodel</Label>
              <SelectDropDown
                itemKey="submodel"
                headerTitle="Select Submodel"
                selectedValue={submodel}
                onValueChange={onInputChange}
                mode={mode}
              />
            </View>

            <View style={styles.formItem}>
              <Label style={styles.inputLabel}>Trim</Label>
              <SelectDropDown
                headerTitle="Select Trim"
                itemKey="trim"
                selectedValue={trim}
                onValueChange={onInputChange}
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
              <Input style={styles.input} />
            </Item>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>CARFAX</Text>
          <View style={styles.formSection}>
            <Item stackedLabel style={styles.formItem}>
              <Label style={styles.inputLabel}>CARFAX Canada Report URL</Label>

              <Item style={styles.carfaxContainer}>
                <Input style={styles.carfaxInput} />
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
  }
}

export default CarItemOne;

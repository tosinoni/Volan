import React, { Component } from "react";
import { View, Text } from "react-native";
import { Form, Item, Label, Input } from "native-base";
import { styles } from "../../styles/screens/create/CreateItemOne";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LocationInput from "../../components/LocationInput";
import SelectDropDown from "../../components/SelectDropDown";

const years = [
  { label: "2019", value: "2019" },
  { label: "2018", value: "2018" },
  { label: "2017", value: "2017" },
  { label: "2016", value: "2016" },
  { label: "2015", value: "2015" },
  { label: "2014", value: "2014" }
];

const makes = [
  { label: "Audi", value: "Audi" },
  { label: "Toyota", value: "Toyota" },
  { label: "Nissan", value: "Nissan" },
  { label: "Mercedez Benz", value: "Mercedez Benz" },
  { label: "BMW", value: "BMW" },
  { label: "Honda", value: "Honda" },
  { label: "Hyundai", value: "Hyundai" },
  { label: "Lexus", value: "Lexus" }
];

export class CreateItemOne extends Component {
  state = {
    selectedYear: "",
    selectedMake: "",
    selectedModel: "",
    selectedSubModel: "",
    selectedTrim: ""
  };

  onYearSelected = selectedYear => {
    this.setState({ selectedYear });
  };

  onMakeSelected = selectedMake => {
    this.setState({ selectedMake });
  };

  onModelSelected = selectedModel => {
    this.setState({ selectedModel });
  };

  onSubModelSelected = selectedSubModel => {
    this.setState({ selectedSubModel });
  };

  onTrimSelected = selectedTrim => {
    this.setState({ selectedTrim });
  };

  render() {
    const {
      selectedYear,
      selectedMake,
      selectedModel,
      selectedSubModel,
      selectedTrim
    } = this.state;
    const { mode } = this.props;

    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        <Form>
          <View style={styles.section}>
            <Text style={styles.sectionText}>LOCATION</Text>
            <View style={styles.formSection}>
              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Current Location</Label>
                <LocationInput style={styles.input} />
              </Item>
            </View>
          </View>

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
              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Year</Label>
                <SelectDropDown
                  headerTitle="Select Year"
                  selectedValue={selectedYear}
                  items={years}
                  onValueChange={this.onYearSelected}
                  mode={mode}
                />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Make</Label>
                <SelectDropDown
                  headerTitle="Select Make"
                  selectedValue={selectedMake}
                  items={makes}
                  onValueChange={this.onMakeSelected}
                  mode={mode}
                />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Model</Label>
                <SelectDropDown
                  headerTitle="Select Model"
                  selectedValue={selectedModel}
                  onValueChange={this.onModelSelected}
                  mode={mode}
                />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Submodel</Label>
                <SelectDropDown
                  headerTitle="Select Submodel"
                  selectedValue={selectedSubModel}
                  onValueChange={this.onSubModelSelected}
                  mode={mode}
                />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Trim</Label>
                <SelectDropDown
                  headerTitle="Select Trim"
                  selectedValue={selectedTrim}
                  onValueChange={this.onTrimSelected}
                  mode={mode}
                />
              </Item>
            </View>
          </View>
        </Form>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemOne;

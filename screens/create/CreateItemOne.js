import React, { Component } from "react";
import { View, Text } from "react-native";
import { Form, Item, Label, Input } from "native-base";
import { styles } from "../../styles/screens/create/CreateItemOne";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LocationInput from "../../components/LocationInput";

export class CreateItemOne extends Component {
  render() {
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
                <Input style={styles.input} />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Make</Label>
                <Input style={styles.input} />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Model</Label>
                <Input style={styles.input} />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Submodel</Label>
                <Input style={styles.input} />
              </Item>

              <Item stackedLabel style={styles.formItem}>
                <Label style={styles.inputLabel}>Trim</Label>
                <Input style={styles.input} />
              </Item>
            </View>
          </View>
        </Form>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemOne;

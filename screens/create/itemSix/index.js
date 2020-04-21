import React, { Component } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../../../styles/screens/create/itemSix";
import { View, Text } from "react-native";
import { Textarea, Button, Form } from "native-base";

export class CreateItemThree extends Component {
  getDefaultView = () => {
    return (
      <View style={[styles.section, { flex: 1 }]}>
        <Text style={styles.sectionText}>SELLER NOTES</Text>
        <View style={[styles.formSection, { flex: 1, paddingVertical: 15 }]}>
          <Textarea bordered placeholder="" style={styles.textArea} />
        </View>
        <View style={styles.sectionText}>
          <Button full light style={styles.saveButton}>
            <Text style={[styles.text, styles.bold]}>SAVE AND CLOSE</Text>
          </Button>
        </View>
      </View>
    );
  };

  renderViewType = () => {
    return this.getDefaultView();
  };

  render() {
    return (
      <KeyboardAwareScrollView
        viewIsInsideTabBar={true}
        contentContainerStyle={{ flex: 1 }}
        extraHeight={-30}
      >
        {this.renderViewType()}
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemThree;

import React, { PureComponent } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../../../styles/screens/create/itemSix";
import { View, Text } from "react-native";
import { Textarea, Button, Form } from "native-base";
import { useFormContext, Controller } from "react-hook-form";

const CreateItemSix = ({ closeCreateForm }) => {
  getDefaultView = () => {
    const { setValue, getValues } = useFormContext();

    const values = getValues({ nest: true });
    const { selectedVehicleType } = values;
    const { notes } = values[selectedVehicleType] || {};

    return (
      <View style={[styles.section, { flex: 1 }]}>
        <Text style={styles.sectionText}>SELLER NOTES</Text>
        <View style={[styles.formSection, { flex: 1, paddingVertical: 15 }]}>
          <Controller
            as={
              <Textarea
                value={notes}
                bordered
                placeholder=""
                style={styles.textArea}
                onChangeText={(value) => {
                  setValue(`${selectedVehicleType}.notes`, value);
                }}
              />
            }
            name={`${selectedVehicleType}.notes`}
          />
        </View>
        <View style={styles.sectionText}>
          <Button
            full
            light
            style={styles.saveButton}
            onPress={closeCreateForm}
          >
            <Text style={[styles.text, styles.bold]}>SAVE AND CLOSE</Text>
          </Button>
        </View>
      </View>
    );
  };

  renderViewType = () => {
    return getDefaultView();
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      contentContainerStyle={{ flex: 1 }}
      extraHeight={-30}
    >
      {renderViewType()}
    </KeyboardAwareScrollView>
  );
};

export default CreateItemSix;

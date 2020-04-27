import React from "react";
import Constants from "../../constants";
import { Colors } from "../../styles/Colors";

import { genericCreateItemStyles } from "../../styles/screens/create";
import { Icon, Button } from "native-base";

import { VEHICLE_TYPES } from "../../constants";
import { CREATE_ITEM_SCHEMA, VEHICLE_TYPES_SCHEMA } from "./validation";
import { withNavigation } from "react-navigation";
import { useForm, FormContext } from "react-hook-form";
import CreateItemForm from "./CreateItemForm";

const CreateItem = ({ navigation }) => {
  const { params } = navigation.state;
  const { mode } = params;

  const methods = useForm({
    defaultValues: {
      currentIndex: 0,
      scrollEnabled: false,
      mode,
      vehicleType: VEHICLE_TYPES.CAR,
      ...VEHICLE_TYPES_SCHEMA,
    },
    validationSchema: CREATE_ITEM_SCHEMA,
  });

  return (
    <FormContext {...methods}>
      <CreateItemForm />
    </FormContext>
  );
};

CreateItem.navigationOptions = (props) => {
  const { params } = props.navigation.state;
  const { mode, saveAndCloseForm, isFormValid } = params;

  const isBuyer = mode === Constants.BUYER;
  return {
    title: isBuyer ? "Add Wishlist" : "Add Inventory",
    headerStyle: {
      backgroundColor: isBuyer ? Colors.brightBlue : Colors.brightRed,
    },
    headerRight: () => {
      return (
        <Button
          light
          transparent
          onPress={saveAndCloseForm}
          disabled={!isFormValid}
        >
          <Icon
            type="MaterialIcons"
            name="save"
            style={!isFormValid ? genericCreateItemStyles.iconDisabled : {}}
          />
        </Button>
      );
    },
    headerTintColor: Colors.white,
  };
};

export default withNavigation(CreateItem);

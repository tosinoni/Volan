import React from "react";
import { View } from "react-native";
import Constants from "../../constants";
import { Colors } from "../../styles/Colors";
import Swiper from "react-native-swiper";
import CreateItemOne from "./itemOne";
import CreateItemTwo from "./itemTwo";
import CreateItemThree from "./itemThree";
import CreateItemFour from "./itemFour";
import CreateItemFive from "./itemFive";
import CreateItemSix from "./itemSix";
import {
  styles as stylesheet,
  genericCreateItemStyles,
  styles,
} from "../../styles/screens/create";
import { Footer, Icon, Button } from "native-base";
import FooterPageNavButtons from "../../components/FooterPageNavButtons";
import { VEHICLE_TYPES } from "../../constants";
import { CREATE_ITEM_SCHEMA, VAIDATION_FIELDS } from "./validation";
import { withNavigation } from "react-navigation";
import { useForm, FormContext, useFormContext } from "react-hook-form";
import { useState } from "react";

let swiperRef = React.createRef(null);

const CreateItem = ({ navigation }) => {
  const { params } = navigation.state;
  const { mode } = params;

  const vehicleTypesObj = Object.keys(VEHICLE_TYPES).reduce(
    (vehicleTypesObj, key) => {
      const value = VEHICLE_TYPES[key];
      vehicleTypesObj[value] = { year: "" };

      return vehicleTypesObj;
    },
    {}
  );
  const methods = useForm({
    defaultValues: {
      currentIndex: 0,
      scrollEnabled: false,
      mode,
      selectedVehicleType: VEHICLE_TYPES.CAR,
      ...vehicleTypesObj,
    },
    validationSchema: CREATE_ITEM_SCHEMA,
  });

  return (
    <FormContext {...methods}>
      <CreateItemForm mode={mode} navigation={navigation} />
    </FormContext>
  );
};

const CreateItemForm = ({ mode, navigation }) => {
  const { watch, errors, triggerValidation, getValues } = useFormContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formValidated, setFormValidated] = useState(false);

  watch();

  const onIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  const handleCircleClick = (index) => {
    if (formValidated) {
      const offset = index - currentIndex;
      swiperRef.current.scrollBy(offset);
    }
  };

  const handleNextClick = async () => {
    if (!formValidated) {
      const errors = await triggerValidation(VAIDATION_FIELDS);
      setFormValidated(true);
      if (!errors) return;
    }
    swiperRef.current.scrollBy(1);
  };

  const handleBackClick = () => {
    swiperRef.current.scrollBy(-1);
  };

  const formHasErrors = Object.keys(errors).length !== 0;
  const isNextButtonDisabled = currentIndex === 5 || formHasErrors;
  const isPrevButtonDisabled = currentIndex === 0;
  const isFormValid = Boolean(formValidated && !formHasErrors);

  const styles = stylesheet({ mode });
  const saveAndCloseForm = () => {
    console.log(getValues({ nest: true }));
    navigation.navigate("Inventory");
  };

  React.useEffect(() => {
    navigation.setParams({ saveAndCloseForm: saveAndCloseForm, isFormValid });
  }, [isFormValid]);

  return (
    <View style={styles.content}>
      <Swiper
        showsPagination={false}
        loop={false}
        onIndexChanged={onIndexChanged}
        ref={swiperRef}
        scrollEnabled={isFormValid}
      >
        <CreateItemOne />
        <CreateItemTwo />
        <CreateItemThree />
        <CreateItemFour />
        <CreateItemFive />
        <CreateItemSix saveAndCloseForm={saveAndCloseForm} />
      </Swiper>

      <Footer style={styles.footer}>
        <Button
          transparent
          style={styles.prevButton}
          disabled={isPrevButtonDisabled}
          onPress={handleBackClick}
        >
          <Icon
            name="arrowleft"
            type="AntDesign"
            style={
              isPrevButtonDisabled ? styles.iconDisabled : styles.buttonIcon
            }
          />
        </Button>
        <FooterPageNavButtons
          numOfButtons={6}
          screenIndex={currentIndex}
          handleCircleClick={handleCircleClick}
        />
        <Button
          transparent
          style={styles.nextButton}
          iconRight
          disabled={isNextButtonDisabled}
          onPress={handleNextClick}
        >
          <Icon
            name="arrowright"
            type="AntDesign"
            style={
              isNextButtonDisabled ? styles.iconDisabled : styles.buttonIcon
            }
          />
        </Button>
      </Footer>
    </View>
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

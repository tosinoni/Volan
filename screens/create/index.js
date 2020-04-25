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
import { styles as stylesheet } from "../../styles/screens/create";
import { Footer, Icon, Button } from "native-base";
import FooterPageNavButtons from "../../components/FooterPageNavButtons";
import { VEHICLE_TYPES } from "../../constants";
import { CREATE_ITEM_SCHEMA } from "./validation";
import { withNavigation } from "react-navigation";
import { useForm, FormContext, useFormContext } from "react-hook-form";
import { useState } from "react";

let swiperRef = React.createRef(null);

const CreateItem = (props) => {
  const { params } = props.navigation.state;
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
      Car: {
        carfaxUrl: "",
        notes: "",
        price: "",
        vin: "",
      },
    },
  });

  return (
    <FormContext {...methods}>
      <CreateItemForm mode={mode} />
    </FormContext>
  );
};

const CreateItemForm = ({ mode }) => {
  const { setValue, getValues, watch } = useFormContext();
  const [currentIndex = 0, setCurrentIndex] = useState(0);

  const { currentIndex: currentIndexStr, scrollEnabled } = getValues();

  watch(Object.values(VEHICLE_TYPES));
  watch(["selectedVehicleType"]);

  const onIndexChanged = (index) => {
    setCurrentIndex(index);
  };

  const handleCircleClick = (index) => {
    const offset = index - currentIndex;
    swiperRef.current.scrollBy(offset);
  };

  const handleNextClick = () => {
    swiperRef.current.scrollBy(1);
  };

  const handleBackClick = () => {
    swiperRef.current.scrollBy(-1);
  };

  const isNextButtonDisabled = currentIndex === 5;
  const isPrevButtonDisabled = currentIndex === 0;

  const styles = stylesheet({ mode });
  return (
    <View style={styles.content}>
      <Swiper
        showsPagination={false}
        loop={false}
        onIndexChanged={onIndexChanged}
        ref={swiperRef}
      >
        <CreateItemOne />
        <CreateItemTwo />
        <CreateItemThree />
        <CreateItemFour />
        <CreateItemFive />
        <CreateItemSix />
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

CreateItem.navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;

  const isBuyer = params.mode === Constants.BUYER;
  return {
    title: isBuyer ? "Add Wishlist" : "Add Inventory",
    headerStyle: {
      backgroundColor: isBuyer ? Colors.brightBlue : Colors.brightRed,
    },
    headerTintColor: Colors.white,
  };
};

export default withNavigation(CreateItem);

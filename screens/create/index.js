import React, { PureComponent } from "react";
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
import { Formik } from "formik";
import { CREATE_ITEM_SCHEMA } from "./validation";
import { useFormikContext } from "formik";
import { withNavigation } from "react-navigation";

let swiperRef = React.createRef(null);

const CreateItem = (props) => {
  const { params } = props.navigation.state;
  const { mode } = params;

  const vehicleTypesObj = Object.keys(VEHICLE_TYPES).reduce(
    (vehicleTypesObj, key) => {
      const value = VEHICLE_TYPES[key];
      vehicleTypesObj[value] = {};

      return vehicleTypesObj;
    },
    {}
  );

  return (
    <Formik
      initialValues={{
        currentIndex: 0,
        scrollEnabled: false,
        mode,
        selectedVehicleType: VEHICLE_TYPES.CAR,
        ...vehicleTypesObj,
      }}
      validationSchema={CREATE_ITEM_SCHEMA}
      validateOnMount={true}
    >
      <CreateItemForm mode={mode} />
    </Formik>
  );
};

const CreateItemForm = ({ mode }) => {
  const { values, handleChange, errors, validateForm } = useFormikContext();

  const { currentIndex: currentIndexStr, scrollEnabled } = values;
  const currentIndex = parseInt(currentIndexStr);

  const onIndexChanged = (index) => {
    handleChange("currentIndex")(`${index}`);
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

  const isNextButtonDisabled =
    currentIndex === 5 || Object.keys(errors).length !== 0;
  const isPrevButtonDisabled = currentIndex === 0;

  const styles = stylesheet({ mode });
  return (
    <View style={styles.content}>
      <Swiper
        showsPagination={false}
        loop={false}
        onIndexChanged={onIndexChanged}
        ref={swiperRef}
        scrollEnabled={scrollEnabled}
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

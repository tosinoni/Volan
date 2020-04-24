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

export class CreateItem extends PureComponent {
  state = {
    currentIndex: 0,
    scrollEnabled: true,
  };

  static navigationOptions = ({ navigation }) => {
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

  handleCircleClick = (index) => {
    const offset = index - this.state.currentIndex;
    this.refs.swiper.scrollBy(offset);
  };

  handleNextClick = () => {
    this.refs.swiper.scrollBy(1);
  };

  handleBackClick = () => {
    this.refs.swiper.scrollBy(-1);
  };

  onIndexChanged = (index) => {
    this.setState({ currentIndex: index });

    if (index === 3) {
      this.setState({ scrollEnabled: false });
    } else {
      this.setState({ scrollEnabled: true });
    }
  };

  render() {
    const { currentIndex, scrollEnabled } = this.state;
    const { params } = this.props.navigation.state;
    const { mode } = params;
    const isNextButtonDisabled = currentIndex === 5;
    const isPrevButtonDisabled = currentIndex === 0;

    const styles = stylesheet({ mode });
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
          mode,
          selectedVehicleType: VEHICLE_TYPES.CAR,
          ...vehicleTypesObj,
        }}
      >
        <View style={styles.content}>
          <Swiper
            showsPagination={false}
            loop={false}
            onIndexChanged={this.onIndexChanged}
            ref={"swiper"}
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
              onPress={this.handleBackClick}
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
              handleCircleClick={this.handleCircleClick}
            />
            <Button
              transparent
              style={styles.nextButton}
              iconRight
              disabled={isNextButtonDisabled}
              onPress={this.handleNextClick}
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
      </Formik>
    );
  }
}

export default CreateItem;

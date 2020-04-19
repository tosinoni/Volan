import React, { Component } from "react";
import { View } from "react-native";
import Constants from "../../constants";
import { Colors } from "../../styles/Colors";
import Swiper from "react-native-swiper";
import CreateItemOne from "./CreateItemOne";
import CreateItemTwo from "./CreateItemTwo";
import CreateItemThree from "./CreateItemThree";
import CreateItemFour from "./CreateItemFour";
import CreateItemFive from "./CreateItemFive";
import CreateItemSix from "./CreateItemSix";
import { styles as stylesheet } from "../../styles/screens/create";
import { Footer, Icon, Button } from "native-base";
import FooterPageNavButtons from "../../components/FooterPageNavButtons";

export class CreateItem extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    const isBuyer = params.mode === Constants.BUYER;
    return {
      title: isBuyer ? "Add Wishlist" : "Add Inventory",
      headerStyle: {
        backgroundColor: isBuyer ? Colors.brightBlue : Colors.brightRed
      },
      headerTintColor: Colors.white
    };
  };

  state = {
    currentIndex: 0,
    scrollEnabled: true
  };

  handleCircleClick = index => {
    const offset = index - this.state.currentIndex;
    this.refs.swiper.scrollBy(offset);
  };

  handleNextClick = () => {
    this.refs.swiper.scrollBy(1);
  };

  handleBackClick = () => {
    this.refs.swiper.scrollBy(-1);
  };

  onIndexChanged = index => {
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

    return (
      <View style={styles.content}>
        <Swiper
          showsPagination={false}
          loop={false}
          onIndexChanged={this.onIndexChanged}
          ref={"swiper"}
          scrollEnabled={scrollEnabled}
        >
          <CreateItemOne mode={mode} />
          <CreateItemTwo mode={mode} />
          <CreateItemThree />
          <CreateItemFour mode={mode} />
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
    );
  }
}

export default CreateItem;

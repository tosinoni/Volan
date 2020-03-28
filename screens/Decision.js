import React, { Component } from "react";
import { Button, Text, Icon } from "native-base";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { Colors } from "../styles/Colors";
import { genericStyles } from "../styles/generic";
import Swiper from "react-native-swiper";
import Constants from "../constants";
import ToggleModal from "../components/ToggleModal";

export class Decision extends Component {
  state = {
    selectedMode: "",
    showModal: false
  };

  onBuyerModeSelected = () => {
    this.setState({ selectedMode: Constants.BUYER, showModal: true });
  };

  onSellerModeSelected = () => {
    this.setState({ selectedMode: Constants.SELLER, showModal: true });
  };

  onClose = () => {
    this.setState({ showModal: false });
    const { selectedMode } = this.state;

    if (selectedMode === Constants.BUYER) this.refs.swiper1.scrollBy(-1);
    else this.refs.swiper2.scrollBy(1);
  };

  render() {
    const { showModal, selectedMode } = this.state;
    return (
      <View style={genericStyles.safeView}>
        <Swiper
          onScrollBeginDrag={this.onBuyerModeSelected}
          showsPagination={false}
          loop={false}
          ref={"swiper1"}
        >
          <View style={[styles.buttonView, styles.buyer]}>
            <Image
              style={styles.image}
              source={require("../assets/images/logo-2.png")}
            />
            <Button
              block
              transparent
              style={[styles.button, { flexDirection: "column" }]}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon
                  style={styles.icon}
                  type="FontAwesome"
                  name="long-arrow-left"
                />

                <View>
                  <Text style={styles.text}>I want</Text>
                  <Text>
                    <Text style={styles.text}>to </Text>
                    <Text style={[styles.text, styles.bold]}>buy</Text>
                  </Text>
                </View>
              </View>
            </Button>
          </View>
          <View
            style={{
              backgroundColor: Colors.brightBlue,
              width: "100%",
              height: "100%"
            }}
          ></View>
        </Swiper>
        <Swiper
          index={1}
          showsPagination={false}
          loop={false}
          onScrollBeginDrag={this.onSellerModeSelected}
          ref={"swiper2"}
        >
          <View
            style={{
              backgroundColor: Colors.brightRed,
              width: "100%",
              height: "100%"
            }}
          ></View>

          <View style={[styles.buttonView, styles.seller]}>
            <Button block transparent style={styles.button}>
              <View>
                <Text style={styles.text}>I want</Text>
                <Text>
                  <Text style={styles.text}>to </Text>
                  <Text style={[styles.text, styles.bold]}>sell</Text>
                </Text>
              </View>
              <Icon
                style={styles.icon}
                type="FontAwesome"
                name="long-arrow-right"
              />
            </Button>
          </View>
        </Swiper>

        <ToggleModal
          showModal={showModal}
          mode={selectedMode}
          onClose={this.onClose}
        />
      </View>
    );
  }
}

export default Decision;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    right: 0,
    width: 100,

    height: 70,
    resizeMode: "contain"
  },
  buttonView: {
    flex: 1
  },
  button: {
    width: "100%",
    height: "100%"
  },
  buyer: {
    backgroundColor: Colors.brightBlue,
    borderTopLeftRadius: 400,
    borderBottomLeftRadius: 400
  },
  seller: {
    backgroundColor: Colors.brightRed,
    borderTopRightRadius: 400,
    borderBottomRightRadius: 400
  },
  text: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: "300"
  },
  icon: {
    color: Colors.white,
    fontWeight: "200"
  },
  bold: {
    fontWeight: "bold"
  }
});

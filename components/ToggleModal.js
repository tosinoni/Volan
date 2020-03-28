import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { Button } from "native-base";
import Modal from "react-native-modal";
import Constants from "../constants";
import { styles } from "../styles/components/ToggleModal";
import { withNavigation } from "react-navigation";

export class ToggleModal extends Component {
  goToSelectedScreen = () => {
    const { mode } = this.props;
    const screen = mode === Constants.BUYER ? "Buyer" : "Seller";

    this.props.navigation.navigate(screen);
  };
  render() {
    const { showModal, mode, onClose } = this.props;
    const stylesWithProps = styles(this.props);

    return (
      <Modal
        testID={"modal"}
        isVisible={showModal}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        onBackdropPress={onClose}
      >
        <View style={stylesWithProps.content}>
          <View style={stylesWithProps.imageView}>
            <Image
              style={stylesWithProps.image}
              source={require("../assets/images/logo-2.png")}
            />
          </View>
          <Text style={stylesWithProps.contentTitle}>
            <Text>Switch to </Text>
            <Text style={stylesWithProps.bold}>{mode}</Text>
            <Text> mode?</Text>
          </Text>
          <View style={stylesWithProps.actionsView}>
            <Button
              testID={"yes-button"}
              light
              block
              style={[stylesWithProps.actionsButton, stylesWithProps.noButton]}
              onPress={onClose}
            >
              <Text style={stylesWithProps.text}>No</Text>
            </Button>

            <Button
              testID={"no-button"}
              style={stylesWithProps.actionsButton}
              light
              block
              onPress={this.goToSelectedScreen}
            >
              <Text>Yes</Text>
            </Button>
          </View>
        </View>
      </Modal>
    );
  }
}

export default withNavigation(ToggleModal);

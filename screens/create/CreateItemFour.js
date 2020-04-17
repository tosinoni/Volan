import React, { Component } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../../styles/screens/create/CreateItemFour";
import ImageTileList from "../../components/ImageTileList";
import ActionSheet from "react-native-actionsheet";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import DropdownAlert from "react-native-dropdownalert";
import Constants from "expo-constants";

export class CreateItemFour extends Component {
  state = {
    images: []
  };

  onTileSelected = item => {
    if (item.isCreate) {
      this.launchActionSheet();
    }
  };

  isPermissionGiven = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      return status === "granted";
    }

    return true;
  };

  createImageTile = ({ uri }) => {
    return {
      type: "image",
      uri
    };
  };

  pickPhoto = async () => {
    try {
      const permissionGiven = await this.isPermissionGiven();
      if (!permissionGiven) {
        this.dropDownAlertRef.alertWithType(
          "error",
          "Select photo failed",
          "Permission is needed to access camera"
        );
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });
      if (!result.cancelled) {
        const { images } = this.state;
        images.push(this.createImageTile(result));

        this.setState({ images });
      }

      console.log(result);
    } catch (e) {
      this.dropDownAlertRef.alertWithType(
        "error",
        "Select photo failed",
        e.message
      );
    }
  };

  handleActionClicked = index => {
    if (index === 0) {
      this.pickPhoto();
    }
  };

  launchActionSheet = () => {
    this.ActionSheet.show();
  };

  render() {
    const { images } = this.state;

    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        <View style={styles.section}>
          <Text style={styles.sectionText}>PHOTOS</Text>
          <View style={styles.formSection}>
            <View style={styles.tileList}>
              <ImageTileList
                items={images}
                tileStyle={styles}
                onTileSelected={this.onTileSelected}
              />
            </View>
          </View>
        </View>

        <ActionSheet
          ref={o => (this.ActionSheet = o)}
          title={"Select image"}
          options={["Take Photo", "Choose from Library...", "Cancel"]}
          cancelButtonIndex={2}
          onPress={this.handleActionClicked}
        />

        <DropdownAlert ref={ref => (this.dropDownAlertRef = ref)} showCancel />
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemFour;

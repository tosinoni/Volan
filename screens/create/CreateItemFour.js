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
import { withNavigation } from "react-navigation";
import { StackActions } from "react-navigation";
import ImageViewer from "../../components/images/ImageViewer";

const maxNumberOfImages = 10;

export class CreateItemFour extends Component {
  state = {
    images: [],
    selectedImages: [],
    imagePreviewVisible: false
  };

  onTileSelected = item => {
    if (item.isCreate) {
      this.launchActionSheet();
    } else if (item.uri) {
      this.showImageViewer([item]);
    }
  };

  showImageViewer = images => {
    const selectedImages = images.map(({ uri }) => {
      return { url: uri };
    });

    this.setState({
      selectedImages,
      imagePreviewVisible: true
    });
  };

  closeImageViewer = () => {
    this.setState({
      selectedImages: [],
      imagePreviewVisible: false
    });
  };

  isPermissionGiven = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      return status === "granted";
    }

    return true;
  };

  getImageTile = ({ uri }) => {
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
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1
      });
      if (!result.cancelled) {
        const { images } = this.state;
        images.push(this.getImageTile(result));

        this.setState({ images });
      }
    } catch (e) {
      this.dropDownAlertRef.alertWithType(
        "error",
        "Select photo failed",
        e.message
      );
    }
  };

  handleActionClicked = index => {
    const imagesLeftToMax = maxNumberOfImages - this.state.images.length;
    const max = imagesLeftToMax > 0 ? imagesLeftToMax : 0;

    if (index === 0) {
      this.pickPhoto();
    } else if (index === 1) {
      const pushAction = StackActions.push({
        routeName: "ImageBrowser",
        params: {
          mode: this.props.mode,
          max,
          callback: this.imageBrowserCallback
        }
      });

      this.props.navigation.dispatch(pushAction);
    }
  };

  imageBrowserCallback = callback => {
    callback
      .then((photos = []) => {
        const newImages = photos.map(item => {
          return this.getImageTile(item);
        });
        const { images } = this.state;

        this.setState({ images: [...images, ...newImages] });
      })
      .catch(e => console.log(e));
  };

  launchActionSheet = () => {
    this.ActionSheet.show();
  };

  render() {
    const { images, selectedImages, imagePreviewVisible } = this.state;

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

        <ImageViewer
          visible={imagePreviewVisible}
          images={selectedImages}
          onClose={this.closeImageViewer}
        />
      </KeyboardAwareScrollView>
    );
  }
}

export default withNavigation(CreateItemFour);

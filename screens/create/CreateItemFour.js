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
import uuid from "react-native-uuid";

const maxNumberOfImages = 10;

export class CreateItemFour extends Component {
  state = {
    images: [],
    selectedImages: [],
    selectedIndex: 0,
    imagePreviewVisible: false,
    ImageTileListVisible: true
  };

  onTileSelected = item => {
    if (item.isCreate) {
      this.launchActionSheet();
    } else if (item.uri) {
      this.showImageViewer(item);
    }
  };

  onImageEdited = (item, selectedIndex) => {
    const { images } = this.state;

    if (selectedIndex > -1) {
      const selectedImage = images[selectedIndex];
      images[selectedIndex] = { ...selectedImage, uri: item.uri };

      this.setState({ images });
    }
  };

  onImageDeleted = selectedIndex => {
    const { images } = this.state;

    if (selectedIndex > -1) {
      images.splice(selectedIndex, 1);
      this.setState({ images });
    }
  };

  showImageViewer = item => {
    const { images } = this.state;

    const selectedIndex = images.findIndex(({ uri }) => uri === item.uri);
    const selectedImages = images.map(({ uri, key }) => {
      return { url: uri, key };
    });

    this.setState({
      selectedImages,
      imagePreviewVisible: true,
      selectedIndex
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
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
      );
      return status === "granted";
    }

    return true;
  };

  getImageTile = ({ uri }) => {
    return {
      type: "image",
      uri,
      key: uuid.v4()
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
        this.setState({ ImageTileListVisible: false });

        const { images } = this.state;
        const newImages = [...images, this.getImageTile(result)];

        this.setState({ images: newImages, ImageTileListVisible: true });
      }
    } catch (e) {
      this.dropDownAlertRef.alertWithType(
        "error",
        "Select photo failed",
        e.message
      );
    }
  };

  handleActionClicked = async index => {
    const imagesLeftToMax = maxNumberOfImages - this.state.images.length;
    const max = imagesLeftToMax > 0 ? imagesLeftToMax : 0;

    if (index === 0) {
      this.pickPhoto();
    } else if (index === 1) {
      const permissionGiven = await this.isPermissionGiven();
      if (!permissionGiven) {
        this.dropDownAlertRef.alertWithType(
          "error",
          "Select photo failed",
          "Permission is needed to access camera"
        );
        return;
      }

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
        this.setState({ ImageTileListVisible: false });
        const { images } = this.state;

        const newImages = photos.map(item => {
          return this.getImageTile(item);
        });

        this.setState({
          images: [...images, ...newImages],
          ImageTileListVisible: true
        });
      })
      .catch(e => console.log(e));
  };

  launchActionSheet = () => {
    this.ActionSheet.show();
  };

  render() {
    const {
      images,
      selectedIndex,
      selectedImages,
      imagePreviewVisible,
      ImageTileListVisible
    } = this.state;

    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        <View style={styles.section}>
          <Text style={styles.sectionText}>PHOTOS</Text>
          <View style={styles.formSection}>
            <View style={styles.tileList}>
              {ImageTileListVisible && (
                <ImageTileList
                  items={images}
                  tileStyle={styles}
                  onTileSelected={this.onTileSelected}
                />
              )}
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
          selectedIndex={selectedIndex}
          onClose={this.closeImageViewer}
          onImageEdited={this.onImageEdited}
          onImageDeleted={this.onImageDeleted}
        />
      </KeyboardAwareScrollView>
    );
  }
}

export default withNavigation(CreateItemFour);

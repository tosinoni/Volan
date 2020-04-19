import React, { Component } from "react";
import { Modal, Text, ImageBackground } from "react-native";
import ImageViewerZoom from "react-native-image-zoom-viewer";
import { Icon, Button } from "native-base";
import { View } from "react-native";
import { ImageManipulator } from "expo-image-crop";

export class ImageViewer extends Component {
  state = {
    isEditVisible: false
  };

  onToggleEdit = item => {
    this.setState({ isEditVisible: false });
    this.props.onClose();
  };

  onImageEdited = item => {
    this.props.onImageEdited(item);
  };

  onImageDeleted = index => {
    this.props.onImageDeleted(index);
    this.props.onClose();
  };

  render() {
    const { visible, images, onClose } = this.props;

    return (
      <Modal visible={visible} transparent={true} onRequestClose={onClose}>
        <ImageViewerZoom
          imageUrls={images}
          onSwipeDown={onClose}
          enableSwipeDown={true}
          enablePreload
          footerContainerStyle={{
            flex: 1,
            right: 5,
            bottom: "5%",
            width: "100%"
          }}
          renderImage={props => {
            return (
              <ImageBackground {...props}>
                <ImageManipulator
                  photo={{ uri: props.source.uri }}
                  isVisible={this.state.isEditVisible}
                  onPictureChoosed={this.onImageEdited}
                  onToggleModal={this.onToggleEdit}
                />
              </ImageBackground>
            );
          }}
          renderFooter={currentIndex => {
            return (
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}
              >
                <Button
                  transparent
                  onPress={() => this.setState({ isEditVisible: true })}
                >
                  <Icon
                    type="MaterialCommunityIcons"
                    name="content-save-edit"
                  />
                </Button>
                <Button
                  transparent
                  onPress={index => this.onImageDeleted(index)}
                >
                  <Icon
                    type="MaterialCommunityIcons"
                    name="trash-can-outline"
                  />
                </Button>
              </View>
            );
          }}
        />
      </Modal>
    );
  }
}

export default ImageViewer;

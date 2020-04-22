import React, { PureComponent } from "react";
import { Modal, Text, ImageBackground } from "react-native";
import ImageViewerZoom from "react-native-image-zoom-viewer";
import { Icon, Button } from "native-base";
import { View } from "react-native";
import { ImageManipulator } from "expo-image-crop";

export class ImageViewer extends PureComponent {
  state = {
    isEditVisible: false,
  };

  onToggleEdit = () => {
    this.setState({ isEditVisible: false });
    this.props.onClose();
  };

  onImageEdited = (item, index) => {
    this.props.onImageEdited(item, index);
  };

  onImageDeleted = (index) => {
    this.props.onImageDeleted(index);
    this.props.onClose();
  };

  render() {
    const { visible, images, onClose, selectedIndex } = this.props;

    return (
      <Modal visible={visible} transparent={true} onRequestClose={onClose}>
        <ImageViewerZoom
          imageUrls={images}
          onSwipeDown={onClose}
          enableSwipeDown={true}
          index={selectedIndex}
          footerContainerStyle={{
            flex: 1,
            right: 5,
            bottom: "5%",
            width: "100%",
          }}
          renderImage={(props) => {
            const index = images.findIndex(
              ({ url }) => url === props.source.uri
            );
            return (
              <ImageBackground {...props}>
                <ImageManipulator
                  photo={{ uri: props.source.uri }}
                  isVisible={this.state.isEditVisible}
                  onPictureChoosed={(item) => {
                    this.onImageEdited(item, index);
                  }}
                  onToggleModal={this.onToggleEdit}
                />
              </ImageBackground>
            );
          }}
          renderFooter={(currentIndex) => {
            return (
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Button
                  transparent
                  onPress={() => this.setState({ isEditVisible: true })}
                >
                  <Icon
                    type="MaterialCommunityIcons"
                    name="square-edit-outline"
                  />
                </Button>
                <Button
                  transparent
                  onPress={(index) => this.onImageDeleted(currentIndex)}
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

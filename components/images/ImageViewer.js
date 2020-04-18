import React, { Component } from "react";
import { Modal, Text } from "react-native";
import ImageViewerZoom from "react-native-image-zoom-viewer";
import { Icon, Button } from "native-base";

export class ImageViewer extends Component {
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
            right: 5,
            bottom: "5%",
            justifyContent: "center",
            alignItems: "center"
          }}
          renderFooter={currentIndex => {
            return (
              <Button danger>
                <Icon type="MaterialCommunityIcons" name="trash-can-outline" />
              </Button>
            );
          }}
        />
      </Modal>
    );
  }
}

export default ImageViewer;

import React, { Component } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../../styles/screens/create/CreateItemFour";
import ImageTileList from "../../components/ImageTileList";

export class CreateItemFour extends Component {
  state = {
    images: []
  };
  render() {
    const { images } = this.state;

    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        <View style={styles.section}>
          <Text style={styles.sectionText}>PHOTOS</Text>
          <View style={styles.formSection}>
            <View style={styles.tileList}>
              <ImageTileList items={images} tileStyle={styles} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemFour;

import React, { Component } from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../../styles/screens/create/CreateItemFour";
import TileList from "../../components/TileList";

const exteriorPhotosTileList = [
  { value: "Left + Front" },
  { value: "Front" },
  { value: "Right + Front" },
  { value: "Right" },
  { value: "Right + Back" },
  { value: "Back" },
  { value: "Left + Back" },
  { value: "Left" },
  {
    type: "icon",
    iconName: "camera-enhance",
    iconType: "MaterialCommunityIcons"
  }
];

const interiorPhotosTileList = [
  { value: "Front Seats" },
  { value: "Top" },
  { value: "Odometer" },
  { value: "Dashboard" },
  { value: "Back Seats" },
  {
    type: "icon",
    iconName: "camera-enhance",
    iconType: "MaterialCommunityIcons"
  }
];
export class CreateItemFour extends Component {
  render() {
    return (
      <KeyboardAwareScrollView viewIsInsideTabBar>
        <View style={styles.section}>
          <Text style={styles.sectionText}>EXTERIOR PHOTOS</Text>
          <View style={styles.formSection}>
            <View style={styles.tileList}>
              <TileList items={exteriorPhotosTileList} tileStyle={styles} />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionText}>INTERIOR PHOTOS</Text>
          <View style={styles.formSection}>
            <View style={styles.tileList}>
              <TileList items={interiorPhotosTileList} tileStyle={styles} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default CreateItemFour;

import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Button, Icon } from "native-base";
import { styles } from "../styles/components/ImageTileList";

const createTile = {
  type: "icon",
  iconName: "add-a-photo",
  iconType: "MaterialIcons",
  isCreate: true
};

export class ImageTileList extends Component {
  getTiles = () => {
    const { items, minNumberOfTiles = 9 } = this.props;
    const tiles = [createTile, ...items];

    if (tiles.length < minNumberOfTiles) {
      const difference = minNumberOfTiles - tiles.length;

      for (let i = 0; i < difference; i++) {
        tiles.push({
          type: "icon",
          iconName: "photo",
          iconType: "MaterialIcons",
          isDisabled: true
        });
      }
    }

    return tiles;
  };

  render() {
    const { tileStyle = {}, onTileSelected } = this.props;

    const Tile = ({ item, key }) => {
      const {
        type = "text",
        value,
        iconName,
        iconType,
        uri,
        isDisabled
      } = item;

      const isImage = type === "image";
      const isIcon = type === "icon";
      const isText = type === "text";

      return (
        <View style={[styles.tile, tileStyle.tile]} key={key}>
          <Button
            rounded
            transparent
            style={styles.button}
            disabled={isDisabled}
            onPress={() => {
              onTileSelected(item);
            }}
          >
            {isText && <Text style={styles.text}>{value}</Text>}
            {isIcon && (
              <Icon
                style={[styles.icon, isDisabled && styles.iconDisabled]}
                name={iconName}
                type={iconType}
              />
            )}
            {isImage && <Image source={{ uri }} style={styles.image} />}
          </Button>
        </View>
      );
    };

    const tiles = this.getTiles();

    return tiles.map((item, key) => {
      return <Tile item={item} key={key} />;
    });
  }
}

export default ImageTileList;

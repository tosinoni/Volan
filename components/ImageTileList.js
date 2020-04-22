import React, { PureComponent, Component } from "react";
import { View, Text, Image } from "react-native";
import { Button, Icon } from "native-base";
import { styles } from "../styles/components/ImageTileList";
import SortableGrid from "react-native-sortable-grid-with-fixed";

const createTile = {
  type: "icon",
  iconName: "add-a-photo",
  iconType: "MaterialIcons",
  isCreate: true,
  isFixed: true,
};

export class ImageTileList extends Component {
  getTiles = () => {
    const { items = [], minNumberOfTiles = 9 } = this.props;
    const tiles = [createTile, ...items];

    if (tiles.length < minNumberOfTiles) {
      const difference = minNumberOfTiles - tiles.length;

      for (let i = 0; i < difference; i++) {
        tiles.push({
          type: "icon",
          iconName: "photo",
          iconType: "MaterialIcons",
          isDisabled: true,
          isFixed: true,
        });
      }
    }

    return tiles;
  };

  onItemsReArranged = (items) => {};

  render() {
    const { tileStyle = {}, onTileSelected } = this.props;

    const Tile = ({ item, key }) => {
      const {
        type = "text",
        value,
        iconName,
        iconType,
        uri,
        isDisabled,
        isCreate,
      } = item;

      const isImage = type === "image";
      const isIcon = type === "icon";
      const isText = type === "text";
      const disabled = isCreate ? false : true;

      return (
        <View
          style={[
            styles.tile,
            tileStyle.tile,
            isDisabled && styles.tileDisabled,
          ]}
          key={key}
          inactive={true}
        >
          <Button
            rounded
            transparent
            style={styles.button}
            disabled={disabled}
            onPress={() => onTileSelected(item)}
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

    return (
      <SortableGrid
        style={{ flex: 1 }}
        itemsPerRow={3}
        onDragRelease={this.onItemsReArranged}
      >
        {tiles.map((item, key) => {
          return (
            <Tile
              item={item}
              key={item.key || key}
              fixed={item.isFixed}
              inactive={item.isFixed}
              onTap={() => onTileSelected(item)}
            />
          );
        })}
      </SortableGrid>
    );
  }
}

export default ImageTileList;

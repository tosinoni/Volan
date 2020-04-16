import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Icon } from "native-base";
import { styles } from "../styles/components/TileList";

export class TileList extends Component {
  render() {
    const { items, tileStyle = {} } = this.props;

    const Tile = ({ item, key }) => {
      const { type = "text", value, iconName, iconType } = item;

      const isImage = type === "image";
      const isIcon = type === "icon";
      const isText = type === "text";

      return (
        <View style={[styles.tile, tileStyle.tile]} key={key}>
          <Button rounded transparent style={styles.button}>
            {isText && <Text style={styles.text}>{value}</Text>}
            {isIcon && (
              <Icon style={styles.icon} name={iconName} type={iconType} />
            )}
          </Button>
        </View>
      );
    };

    return items.map((item, key) => {
      return <Tile item={item} key={key} />;
    });
  }
}

export default TileList;

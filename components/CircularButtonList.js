import React, { Component, PureComponent } from "react";
import { View, Text, Image } from "react-native";
import { Button, Icon, Badge } from "native-base";
import { styles } from "../styles/components/CircularButtonList";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "../styles/Colors";

export class CircularButtonList extends PureComponent {
  render() {
    const {
      list = [],
      onItemSelected,
      selectedItem,
      isBadgeSelection,
      isButtonSelection,
    } = this.props;

    return (
      <ScrollView horizontal contentContainerStyle={styles.buttonList}>
        {list.map((item, index) => {
          const { icon, text, color } = item;
          const isItemSelected = text === selectedItem;
          const backgroundColor =
            isItemSelected && isButtonSelection ? Colors.brightGreen : color;

          return (
            <View style={styles.buttonView} key={index}>
              <Button
                style={[styles.button, { backgroundColor }]}
                badge
                vertical
                onPress={() => {
                  onItemSelected(item);
                }}
              >
                {icon && (
                  <View style={styles.iconView}>
                    <Image source={icon} style={styles.icon} />
                  </View>
                )}
                {isItemSelected && isBadgeSelection && (
                  <Badge style={styles.badge}>
                    <Icon
                      type="FontAwesome"
                      name="check"
                      style={styles.badgeIcon}
                    />
                  </Badge>
                )}
              </Button>
              <Text>{text}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default CircularButtonList;

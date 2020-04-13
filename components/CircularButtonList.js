import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Icon, Badge } from "native-base";
import { styles } from "../styles/components/CircularButtonList";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "../styles/Colors";

export class CircularButtonList extends Component {
  render() {
    const {
      list = [],
      onItemSelected,
      selectedItem,
      isBadgeSelection,
      isButtonSelection
    } = this.props;

    return (
      <ScrollView horizontal contentContainerStyle={styles.buttonList}>
        {list.map((item, index) => {
          const isItemSelected = item.text === selectedItem;
          const backgroundColor =
            isItemSelected && isButtonSelection
              ? Colors.brightBlue
              : item.color;

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
                {isItemSelected && isBadgeSelection && (
                  <Badge primary style={styles.badge}>
                    <Icon
                      type="FontAwesome"
                      name="check"
                      style={styles.badgeIcon}
                    />
                  </Badge>
                )}
              </Button>
              <Text>{item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default CircularButtonList;

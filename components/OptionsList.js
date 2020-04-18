import React, { Component } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { styles } from "../styles/components/OptionsList";
import { Button, Icon } from "native-base";
import { Colors } from "../styles/Colors";

export class OptionsList extends Component {
  removeItemFromList = (list, text) => {
    const newList = [...list];

    const index = newList.indexOf(text);

    if (index > -1) {
      newList.splice(index, 1);
    }

    return newList;
  };
  onOptionItemSelected = (type, text) => {
    const { initialList = [], selectedList = [], onItemSelected } = this.props;

    let newInitialList, newSelectedList;

    if (type === "initial") {
      newInitialList = this.removeItemFromList(initialList, text);
      newSelectedList = [...selectedList, text];
    } else {
      newInitialList = [...initialList, text];
      newSelectedList = this.removeItemFromList(selectedList, text);
    }

    onItemSelected(newInitialList, newSelectedList);
  };

  render() {
    const {
      initialList = [],
      initialText,
      selectedText,
      selectedColor,
      selectedList = []
    } = this.props;

    const OptionItem = ({ text, type, key }) => {
      const backgroundColor = type === "selected" ? selectedColor : undefined;
      const iconName = type === "selected" ? "minus" : "plus";

      return (
        <Button
          key={key}
          rounded
          style={[styles.optionButton, { backgroundColor }]}
          onPress={() => {
            this.onOptionItemSelected(type, text);
          }}
        >
          <Icon style={styles.icon} name={iconName} type="FontAwesome" />
          <Text style={styles.text}>{text}</Text>
        </Button>
      );
    };

    return (
      <View style={styles.optionsContainer}>
        <View style={styles.optionsLeft}>
          <Text style={styles.title}>{initialText}</Text>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            {initialList.sort().map((option, key) => {
              return <OptionItem text={option} type="initial" key={key} />;
            })}
          </ScrollView>
        </View>
        <View style={styles.optionsRight}>
          <Text style={styles.title}>{selectedText}</Text>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            {selectedList.sort().map((option, key) => {
              return <OptionItem text={option} key={key} type="selected" />;
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default OptionsList;

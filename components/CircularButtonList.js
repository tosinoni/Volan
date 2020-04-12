import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";
import { styles } from "../styles/components/CircularButtonList";
import { ScrollView } from "react-native-gesture-handler";

export class CircularButtonList extends Component {
  render() {
    const { list = [] } = this.props;

    return (
      <ScrollView horizontal contentContainerStyle={styles.buttonList}>
        {list.map((item, index) => {
          return (
            <View style={styles.buttonView} key={index}>
              <Button
                style={[styles.button, { backgroundColor: item.color }]}
              ></Button>
              <Text>{item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default CircularButtonList;

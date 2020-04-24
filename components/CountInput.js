import React, { Component, PureComponent } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/components/CountInput";
import { Button, Input, Icon } from "native-base";

export class CountInput extends PureComponent {
  onIncreaseSelected = () => {
    const { increment = 1, value = 0, onValueChange } = this.props;
    const newValue = parseFloat(value || 0) + increment;

    onValueChange(`${newValue}`);
  };

  onDecreaseSelected = () => {
    const { increment = 1, value = 0, onValueChange } = this.props;
    const newValue = parseFloat(value || 0) - increment;
    onValueChange(`${newValue}`);
  };

  onInputChange = (value) => {
    const { onValueChange } = this.props;

    onValueChange(value);
  };

  render() {
    const { value, decimals = 0 } = this.props;
    const displayValue = value > 0 ? parseFloat(value).toFixed(decimals) : "";

    return (
      <View style={styles.inputView}>
        <Button transparent onPress={() => this.onDecreaseSelected()}>
          <Icon style={styles.icon} name="minus" type="FontAwesome" />
        </Button>

        <Input
          style={styles.input}
          keyboardType="numeric"
          onChangeText={this.onInputChange}
        >
          <Text>{displayValue}</Text>
        </Input>

        <Button transparent onPress={() => this.onIncreaseSelected()}>
          <Icon style={styles.icon} name="plus" type="FontAwesome" />
        </Button>
      </View>
    );
  }
}

export default CountInput;

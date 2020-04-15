import React, { Component } from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/components/CountInput";
import { Button, Input, Icon } from "native-base";

export class CountInput extends Component {
  onIncreaseSelected = () => {
    const { increment = this.props.incrementor, value = 0, onValueChange, itemKey } = this.props;
    const newValue = (value || 0) + increment;
    onValueChange(itemKey, newValue);
  };

  onDecreaseSelected = () => {
    const { increment = this.props.incrementor, value = 0, onValueChange, itemKey } = this.props;
    const newValue = (value || 0) - increment;
    onValueChange(itemKey, newValue);
  };

  render() {
    const { value } = this.props;
    const displayValue = value > 0 ? value.toFixed(this.props.decimals) : "";

    return (
      <View style={styles.inputView}>
        <Button transparent onPress={() => this.onDecreaseSelected()}>
          <Icon style={styles.icon} name="minus" type="FontAwesome" />
        </Button>

        <Input style={styles.input} keyboardType="numeric">
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

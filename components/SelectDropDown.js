import React, { Component } from "react";
import {
  Picker,
  Header,
  Left,
  Button,
  Icon,
  Right,
  Title,
  Body
} from "native-base";
import { View } from "react-native";
import { styles as stylesheet } from "../styles/components/SelectDropDown";

export class SelectDropDown extends Component {
  render() {
    const {
      headerTitle,
      mode,
      selectedValue,
      onValueChange,
      items = []
    } = this.props;
    const styles = stylesheet({ mode });

    return (
      <View style={styles.pickerContainer}>
        <Picker
          renderHeader={backAction => (
            <Header style={styles.header}>
              <Left>
                <Button transparent onPress={backAction}>
                  <Icon name="arrow-back" style={{ color: "#fff" }} />
                </Button>
              </Left>
              <Body style={{ flex: 3 }}>
                <Title style={{ color: "#fff" }}>{headerTitle}</Title>
              </Body>
              <Right />
            </Header>
          )}
          textStyle={styles.pickerTextStyle}
          style={styles.picker}
          iosIcon={<Icon name="arrow-down" style={styles.pickerIconStyle} />}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        >
          {items.map((item, index) => {
            return (
              <Picker.Item key={index} label={item.label} value={item.value} />
            );
          })}
        </Picker>
      </View>
    );
  }
}

export default SelectDropDown;

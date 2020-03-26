import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

export class ProfileFooter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/volanlogo.png")}
          style={styles.image}
        />
        <Text style={styles.text}>{'\u00A9'} 2020 Volan, Inc</Text>
        <Text style={styles.versionText}>Version 0.1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    marginBottom: '5%',
    width: 50,
    height: 40,
  },
  text: {
    color: "grey",
  },
  versionText: {
    marginBottom: '5%',
    color: "grey",
  }
});
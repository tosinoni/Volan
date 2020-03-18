import React, { Component } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import {
  Text,
  Icon,
  Item,
  Input,
  Card,
  Container,
  Content,
  Button,
  Header,
  Thumbnail,
  CardItem,
  Col,
  Row,
  Grid,
  Form,
  View,
  Label
} from "native-base";
import { StyleSheet, Image, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const slides = [
  {
    key: "welcome",
    title: "Welcome!",
    text: "POST",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae placerat nibh, nec lacinia massa.",
    image: require("../assets/images/intro/image-1.png"),
    backgroundColor: "#0f1e23"
  },
  {
    key: "match",
    text: "MATCH",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae placerat nibh, nec lacinia massa.",
    image: require("../assets/images/intro/image-1.png"),
    image: require("../assets/images/intro/image-2.png"),
    backgroundColor: "#b32d23"
  },
  {
    key: "connect",
    text: "CONNECT",
    subText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae placerat nibh, nec lacinia massa.",
    buttonText: "Get Started",
    image: require("../assets/images/intro/image-1.png"),
    image: require("../assets/images/intro/image-3.png"),
    backgroundColor: "#0f1e23"
  }
];

export class Intro extends Component {
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };

  _renderItem = ({ item }) => {
    const { backgroundColor, buttonText, title, image, subText, text } = item;
    return (
      <View style={[styles.slide, { backgroundColor }]}>
        {title && <Text style={styles.title}>{title}</Text>}

        <View style={styles.imageView}>
          <Image source={image} style={styles.image} />
        </View>

        <View style={styles.descriptionView}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.subText}>{subText}</Text>

          {buttonText && (
            <View style={styles.buttonView}>
              <Button
                block
                light
                onPress={() => alert("Hi!")}
                style={styles.button}
              >
                <Text style={styles.bold}>{buttonText}</Text>
              </Button>
            </View>
          )}
        </View>
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        dotStyle={styles.inActiveCircle}
        renderItem={this._renderItem}
        slides={slides}
        onDone={this._onDone}
      />
    );
  }
}

const styles = StyleSheet.create({
  inActiveCircle: {
    backgroundColor: "#a9c3c7"
  },

  slide: {
    width: "100%",
    alignItems: "center",
    height: "100%"
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 50
  },

  descriptionView: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32
  },

  image: {
    width: 180,
    height: 180,
    resizeMode: "contain"
  },
  text: {
    fontSize: 40,
    padding: 16,
    lineHeight: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },
  subText: {
    fontSize: 18,
    fontWeight: "200",
    lineHeight: 26,
    textAlign: "center",
    color: "white"
  },
  title: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
    padding: 16
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bold: {
    fontWeight: "bold"
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 10
  }
});

export default Intro;

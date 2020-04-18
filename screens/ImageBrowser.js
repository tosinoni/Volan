import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator
} from "react-native";

import Constants from "../constants";
import { Colors } from "../styles/Colors";
import { Button, Icon } from "native-base";

import * as MediaLibrary from "expo-media-library";
import SafeAreaView from "react-native-safe-area-view";
import Header from "../components/Header";

import ImageTile from "../components/images/ImageTile";

const { width } = Dimensions.get("window");

export default class ImageBrowser extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    const { title, prepareCallback } = params;

    const isBuyer = params.mode === Constants.BUYER;
    return {
      title: title && title !== "0 Selected" ? title : "Select Images",
      headerStyle: {
        backgroundColor: isBuyer ? Colors.brightBlue : Colors.brightRed
      },
      headerTintColor: Colors.white,
      headerLeft: () => {
        return (
          <Button
            light
            transparent
            onPress={() => {
              navigation.pop();
            }}
          >
            <Icon type="MaterialIcons" name="arrow-back" />
          </Button>
        );
      },
      headerRight: () => {
        return (
          <Button light transparent onPress={prepareCallback}>
            <Icon type="MaterialIcons" name="done" />
          </Button>
        );
      }
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      max: 10,
      photos: [],
      selected: [],
      after: null,
      hasNextPage: true
    };
  }

  componentDidMount() {
    const { max } = this.props.navigation.state.params;

    this.getPhotos();
    this.setState({
      badgeColor: this.props.badgeColor ? this.props.badgeColor : "#007aff",
      max
    });
    this.props.navigation.setParams({ prepareCallback: this.prepareCallback });
  }

  selectImage = index => {
    let newSelected = Array.from(this.state.selected);

    if (newSelected.indexOf(index) === -1) {
      newSelected.push(index);
    } else {
      const deleteIndex = newSelected.indexOf(index);
      newSelected.splice(deleteIndex, 1);
    }

    if (newSelected.length > this.state.max) return;
    if (newSelected.length === 0) newSelected = [];

    this.setState({ selected: newSelected });
    this.props.navigation.setParams({ title: this.getHeaderText(newSelected) });
  };

  getPhotos = () => {
    let params = { first: 500 };
    if (this.state.after) params.after = this.state.after;
    if (!this.state.hasNextPage) return;
    MediaLibrary.getAssetsAsync(params).then(assets => {
      this.processPhotos(assets);
    });
  };

  processPhotos = assets => {
    if (this.state.after === assets.endCursor) return;

    let displayAssets;
    if (this.props.mediaSubtype == null) {
      displayAssets = assets.assets;
    } else {
      displayAssets = assets.assets.filter(asset => {
        return asset.mediaSubtypes.includes(this.props.mediaSubtype);
      });
    }

    this.setState({
      photos: [...this.state.photos, ...displayAssets],
      after: assets.endCursor,
      hasNextPage: assets.hasNextPage
    });
  };

  getHeaderText = selected => {
    let selectedCount = selected.length;

    let headerText = `${selectedCount} ${
      this.props.headerSelectText ? this.props.headerSelectText : "Selected"
    }`;
    if (selectedCount === this.state.max) headerText = headerText + " (Max)";

    return headerText;
  };

  getItemLayout = (data, index) => {
    let length = width / 4;
    return { length, offset: length * index, index };
  };

  prepareCallback = () => {
    let { selected, photos } = this.state;
    const selectedPhotos = selected.map(i => photos[i]);
    const assetsInfo = Promise.all(
      selectedPhotos.map(i => MediaLibrary.getAssetInfoAsync(i))
    );

    this.props.navigation.state.params.callback(assetsInfo);
    this.props.navigation.pop();
  };

  // renderHeader = () => {
  //   const headerDoneText = this.props.headerDoneText
  //     ? this.props.headerDoneText
  //     : "Done";
  //   const headerButtonColor = this.props.headerButtonColor
  //     ? this.props.headerButtonColor
  //     : "#007aff";

  //   return (
  //     <View>
  //       <View style={styles.header}>
  //         <Button
  //           transparent
  //           onPress={() => this.props.callback(Promise.resolve([]))}
  //         >
  //           <Text style={{ color: headerButtonColor }}>{headerCloseText}</Text>
  //         </Button>
  //         <Button transparent onPress={() => this.prepareCallback()}>
  //           <Text style={{ color: headerButtonColor }}>{headerDoneText}</Text>
  //         </Button>
  //       </View>
  //     </View>
  //   );
  // };

  renderImageTile = ({ item, index }) => {
    const selected = this.state.selected.indexOf(index) !== -1;
    const selectedItemCount = this.state.selected.indexOf(index) + 1;

    return (
      <ImageTile
        item={item}
        selectedItemCount={selectedItemCount}
        index={index}
        camera={false}
        selected={selected}
        selectImage={this.selectImage}
        badgeColor={this.state.badgeColor}
      />
    );
  };

  renderLoading = () => {
    return (
      <View style={styles.emptyContent}>
        <ActivityIndicator
          size="large"
          color={this.props.loadingColor ? this.props.loadingColor : "#bbb"}
        />
      </View>
    );
  };

  renderEmpty = () => {
    return (
      <View style={styles.emptyContent}>
        <Text style={styles.emptyText}>
          {this.props.emptyText ? this.props.emptyText : "No image"}
        </Text>
      </View>
    );
  };

  renderImages = () => {
    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={this.state.photos}
        numColumns={4}
        renderItem={this.renderImageTile}
        keyExtractor={(_, index) => index}
        onEndReached={() => {
          this.getPhotos();
        }}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={this.renderEmpty}
        initialNumToRender={24}
        getItemLayout={this.getItemLayout}
      />
    );
  };

  render() {
    return <View style={styles.container}>{this.renderImages()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: width,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 19
  },
  emptyContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
    color: "#bbb",
    fontSize: 20
  }
});

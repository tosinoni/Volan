import React, { PureComponent } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Text } from "react-native";
import * as Location from "expo-location";

export class LocationInput extends PureComponent {
  state = {
    currentLocation: {}
  };

  async componentDidMount() {
    // let { status } = await Location.requestPermissionsAsync();
    // const currentLocation = await Location.getCurrentPositionAsync({});
    // console.log(currentLocation);
    // const locationStr = await Location.reverseGeocodeAsync(currentLocation);
    // console.log(locationStr);
    // this.setState({ currentLocation });
  }

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2} // minimum length of text to search
        autoFocus={false}
        fetchDetails={true}
        listViewDisplayed={false}
        onPress={(data, details = null) => {
          //   console.log(data, details);
          if (this.props.onLocationPicked) this.props.onLocationPicked(details);
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: "AIzaSyAwI3k1Pi928MWfbIgk7mv01YUmjLCUYDU",
          language: "en" // language of the results
        }}
        styles={{
          textInputContainer: {
            width: "100%"
          },
          description: {
            fontWeight: "bold"
          },
          predefinedPlacesDescription: {
            color: "#1faadb"
          }
        }}
        enablePoweredByContainer={false}
        renderDescription={row =>
          row.description || row.formatted_address || row.name
        }
        filterReverseGeocodingByTypes={[
          "locality",
          "administrative_area_level_3"
        ]}
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        nearbyPlacesAPI="GoogleReverseGeocoding" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      />
    );
  }
}

export default LocationInput;

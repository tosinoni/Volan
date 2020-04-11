import React, { Component } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Text } from "react-native";
export class LocationInput extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2} // minimum length of text to search
        autoFocus={false}
        fetchDetails={true}
        keyboardShouldPersistTaps="always"
        listViewDisplayed="false"
        onPress={(data, details = null) => {
          console.log(data, details);
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
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      />
    );
  }
}

export default LocationInput;

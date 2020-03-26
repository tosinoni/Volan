import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Avatar, Button} from 'react-native-elements';
import { Colors } from "../styles/Colors";

const SCREEN_WIDTH = Dimensions.get('window').width;

export class ProfileCard extends Component {
  render() {
    return (
      <View>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: 'rgba(241,240,241,1)' }}
        >
          <ScrollView style={{ flex: 1, }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: Colors.brightBlue,
                alignItems: 'center',
                height: 250,
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50,
              }}
            >
              <View style={{ flex: 3, flexDirection: 'row' }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Avatar
                    size="xlarge"
                    rounded
                    // Default to initials if no profile pic present
                    source={{
                      uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
                    }}
                    activeOpacity={0.7}
                    overlayContainerStyle={{ backgroundColor: 'transparent' }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      marginTop: 10,
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={styles.name}>
                      Paul Allen
                    </Text>
                    <Text style={styles.companyInfo}>
                      Ottawa Motors
                    </Text>
                    <Text style={styles.userInfo}>
                      paul.allen@gmail.com
                    </Text>
                    <Text style={styles.userInfo}>
                      (613)-345-7628
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: '80%',
                  borderWidth: 0.5,
                  borderColor: 'white',
                  marginHorizontal: 20,
                  height: 1,
                }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View style={{ flex: 1, alignItems: 'left', marginLeft: '10%' }}>
                  <Text style={{color: 'white', fontWeight: "bold"}}>Member Since:</Text>
                  <Text style={{color: 'white'}}>July 2019</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'right', marginLeft: '10%' }}>
                  <Button
                    title="Edit Profile"
                    buttonStyle={{
                      height: 33,
                      width: 120,
                      backgroundColor: 'white',
                      borderRadius: 5,
                    }}
                    titleStyle={{
                      fontSize: 13,
                      color: 'gray',
                    }}
                    onPress={() => console.log('Edit Profile')}
                    underlayColor="transparent"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameHeader: {
    color: 'black',
    fontSize: 25,
    marginLeft: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
  userInfo: {
    color: 'white',
    paddingBottom: '2%',
  },
  companyInfo: {
    marginBottom: '5%',
    color: 'white',
  }
});
import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Avatar, Button, Icon} from 'react-native-elements';
import { Colors } from "../styles/Colors";
import { withFirebaseHOC } from "../config/Firebase";
import { ProfileFooter } from "../screens/ProfileFooter"
import { Settings } from "../screens/Settings"

const SCREEN_WIDTH = Dimensions.get('window').width;

export class Profile extends PureComponent {
  GoToEditProfile = () => this.props.navigation.navigate("EditProfile");
  render() {
    return (
      <ScrollView>
        {/* Profile Card */}
        <View>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: 'rgba(241,240,241,1)' }}
        >
          <ScrollView style={{ flex: 1, }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: Colors.darkBlue,
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
                        'https://media-exp1.licdn.com/dms/image/C4E03AQE7N0xLMdo2cA/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=JPxRFhnRrNOhkZG0pMrCxvvWnuFN0YNuZWQqh3YyabA',
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
                      Tosin Oni
                    </Text>
                    <Text style={styles.companyInfo}>
                      Ottawa Motors
                    </Text>
                    <Text style={styles.userInfo}>
                      tosin.oni@gmail.com
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
                    icon={
                      <Icon
                        name='account-edit'
                        type='material-community'
                        color='gray'
                        size={13}
                      />
                    }
                    title=" Edit Profile"
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
                    onPress={this.GoToEditProfile}
                    underlayColor="transparent"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
        <Settings/>
        <ProfileFooter/>
      </ScrollView>
    );
  }
}

export default withFirebaseHOC(Profile);

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
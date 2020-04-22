import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Avatar, Button, Input, Icon} from 'react-native-elements';
import { Colors } from "../styles/Colors";
import { withFirebaseHOC } from "../config/Firebase";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class EditProfile extends PureComponent {
  render() {
    return (
      <ScrollView>
      <View>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(241,240,241,1)' }}>
          <ScrollView style={{ flex: 1, }}>
            <View style={styles.blueBlob}>
              <View style={{ flex: 3, flexDirection: 'row' }}>
                <View style={{ flex: 1, marginTop: 20, alignItems: 'center',}}>
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
                    showEditButton
                  />
                  <Input
                    placeholder='First Name'
                    
                    leftIcon={
                      <Icon
                        type='material-community'
                        name='file'
                        size={22}
                        color='white'
                        iconStyle={{ marginRight: 10}}
                      />
                    }
                    inputContainerStyle={{ borderBottomColor: 'white', color:'orange'}}
                    placeholderTextColor = 'white'
                    selectionColor = 'white'
                  />

                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
      </ScrollView>
    );
  }
}

export default withFirebaseHOC(EditProfile);

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
  },
  blueBlob:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.brightBlue,
    alignItems: 'center',
    height: SCREEN_HEIGHT - 200,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  }
});
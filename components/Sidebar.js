import React, { PureComponent } from "react";
import { View } from "react-native";
import { Text, List, ListItem, Thumbnail } from "native-base";
import { DrawerActions } from "react-navigation-drawer";
import { styles } from "../styles/components/Sidebar";
import { withFirebaseHOC } from "../config/Firebase";

const routes = ["Subscription", "Profile", "Logout"];

export class Sidebar extends PureComponent {
  state = {
    user: {}
  };

  onItemClickedInDrawer = data => {
    if (data === "Logout") {
      this.handleSignout();
    } else {
      this.props.navigation.navigate(data);
    }
    this.props.navigation.dispatch(DrawerActions.closeDrawer());
  };

  handleSignout = async () => {
    try {
      await this.props.firebase.signOut();
      this.props.navigation.navigate("Auth");
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    try {
      const user = await this.props.firebase.getLoggedInUserObj();

      this.setState({ user });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { user } = this.state;
    const { photoURL, name } = user;
    const uri = photoURL || "http://www.gravatar.com/avatar/?d=identicon";

    return (
      <View>
        <View style={styles.userInfoView}>
          <Thumbnail
            large
            source={{ uri }}
            style={{ backgroundColor: "white" }}
          />

          <Text style={styles.text}>{name}</Text>
        </View>
        <List
          dataArray={routes}
          contentContainerStyle={{ marginTop: 250 }}
          renderRow={data => {
            return (
              <ListItem
                key={data}
                button
                onPress={() => this.onItemClickedInDrawer(data)}
              >
                <Text>{data}</Text>
              </ListItem>
            );
          }}
        />
      </View>
    );
  }
}

export default withFirebaseHOC(Sidebar);

import React, { Component } from "react";
import { FooterTab, Button, Icon, Text, Badge, Footer } from "native-base";
import { withNavigation } from "react-navigation";
import { styles as styleSheet } from "../styles/components/TabBar";
import { DrawerActions } from "react-navigation-drawer";
import Constants from "../constants";

export class BuyerBottomNav extends Component {
  state = {
    currentRouteName: "WishList"
  };
  navigateToTabComponent = (routeName, options = {}) => {
    this.props.navigation.navigate(routeName, options);
    this.setState({ currentRouteName: routeName });
  };

  openDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  };

  isRouteActive = routeName => {
    const { currentRouteName } = this.state;
    return currentRouteName === routeName;
  };

  render() {
    const styles = styleSheet({ mode: Constants.BUYER });

    return (
      <Footer style={styles.footer} elevation={10}>
        <FooterTab style={styles.footerTab}>
          <Button
            badge
            active={this.isRouteActive("WishList")}
            vertical
            onPress={() => {
              this.navigateToTabComponent("WishList");
            }}
            style={styles.button}
          >
            <Badge style={styles.badge}>
              <Text>2</Text>
            </Badge>
            <Icon name="home" type="MaterialIcons" />
          </Button>
          <Button
            style={styles.button}
            active={this.isRouteActive("MatchesPage")}
            vertical
            onPress={() => {
              this.navigateToTabComponent("MatchesPage");
            }}
          >
            <Icon name="arrow-decision-outline" type="MaterialCommunityIcons" />
          </Button>
          <Button
            onPress={() => {
              this.navigateToTabComponent("Create", { mode: Constants.BUYER });
            }}
            style={styles.createButton}
          >
            <Icon name="add" style={styles.createIcon} />
          </Button>
          <Button
            style={styles.button}
            active={this.isRouteActive("Connections")}
            badge
            vertical
            onPress={() => {
              this.navigateToTabComponent("Connections");
            }}
          >
            <Badge style={styles.badge}>
              <Text>51</Text>
            </Badge>
            <Icon name="connectdevelop" type="FontAwesome" />
          </Button>
          <Button style={styles.button} vertical onPress={this.openDrawer}>
            <Icon name="menu" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default withNavigation(BuyerBottomNav);

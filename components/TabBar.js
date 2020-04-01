import React, { Component } from "react";
import { FooterTab, Button, Icon, Text, Badge, Footer } from "native-base";
import { withNavigation } from "react-navigation";
import { styles } from "../styles/components/TabBar";
import { DrawerActions } from "react-navigation-drawer";

export class TabBar extends Component {
  state = {
    currentRouteName: "WishList"
  };
  navigateToTabComponent = routeName => {
    this.props.navigation.navigate(routeName);
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
            <Badge>
              <Text>2</Text>
            </Badge>
            <Icon name="apps" />
          </Button>
          <Button
            style={styles.button}
            active={this.isRouteActive("MatchesPage")}
            vertical
            onPress={() => {
              this.navigateToTabComponent("MatchesPage");
            }}
          >
            <Icon name="camera" />
          </Button>
          <Button
            style={styles.button}
            onPress={this._onHomePress}
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
            <Badge>
              <Text>51</Text>
            </Badge>
            <Icon active name="navigate" />
          </Button>
          <Button style={styles.button} vertical onPress={this.openDrawer}>
            <Icon name="menu" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default withNavigation(TabBar);

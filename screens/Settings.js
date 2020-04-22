import React, { PureComponent } from 'react';
import { View, SectionList, StyleSheet } from 'react-native';
import { ListItem, Divider} from 'react-native-elements';
import { Colors } from "../styles/Colors";

const sections = [
  {
    data: [
      {
        backgroundColor: Colors.orange,
        type: 'material-community',
        icon: 'bell',
        title: 'Push Notifications',
        hideChevron: true,
        checkbox: true,
      },
      {
        backgroundColor: 'grey',
        type: 'material-community',
        icon: 'email',
        title: 'Email Notifications',
        hideChevron: true,
        checkbox: true,
      },
    ],
  },
  {
    data: [
      {
        backgroundColor: Colors.brightBlue,
        type: 'material-community',
        icon: 'check-decagram',
        title: 'Subscription',
        rightTitle: 'Free',
      },
      {
        backgroundColor: Colors.brightRed,
        type: 'material-community',
        icon: 'earth',
        title: 'Language',
        rightTitle: 'English',
      },
      {
        backgroundColor: Colors.darkBlue,
        type: 'material-community',
        icon: 'cash',
        title: 'Currency',
        rightTitle: 'CAD',
      },
    ],
  },
  {
    data: [
      {
        backgroundColor: Colors.orange,
        type: 'material-community',
        icon: 'help-circle',
        title: 'Help Desk',
      },
      {
        backgroundColor: Colors.brightBlue,
        type: 'material-community',
        icon: 'file',
        title: 'Privacy and Legal Notice',
      },
    ],
  },
  // Space at the bottom
  { data: [] },
];

export class Settings extends PureComponent {
  renderItem = ({
    item: { title, backgroundColor, type, icon, rightTitle, hideChevron, checkbox },
  }) => (
    <ListItem
      containerStyle={{ paddingVertical: 8 }}
      switch={checkbox && { value: true }}
      key={title}
      chevron={!hideChevron}
      rightTitle={rightTitle}
      leftIcon={{
        type: type,
        name: icon,
        size: 20,
        color: 'white',
        containerStyle: {
            backgroundColor,
            width: 28,
            height: 28,
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
          },
      }}
      title={title}
    />
  );

  renderSectionHeader = () => <View style={styles.headerSection} />;

  ItemSeparatorComponent = () => (
    <View style={styles.separatorComponent}>
      <Divider style={styles.separator} />
    </View>
  );

  keyExtractor = (item, index) => index;

  render() {
    return (
      <SectionList
        keyExtractor={this.keyExtractor}
        contentContainerStyle={styles.containerStyle}
        sections={sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        ItemSeparatorComponent={this.ItemSeparatorComponent}
        SectionSeparatorComponent={Divider}
        stickySectionHeadersEnabled={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFEFF4',
  },
  separatorComponent: {
    backgroundColor: 'white',
  },
  separator: {
    marginLeft: 58,
  },
  headerSection: {
    height: 30,
  },
});
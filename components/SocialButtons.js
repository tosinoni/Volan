import * as React from "react";

import { View, Text, Row, Button, Icon } from "native-base";
import { StyleSheet } from "react-native";

export default function SocialButtons(props) {
  return (
    <View>
      <Text style={styles.text}>or use social</Text>

      <Row style={styles.socialIconsRow}>
        <Button light transparent>
          <Icon style={styles.socialIcon} type="AntDesign" name="google" />
        </Button>
        <Button light transparent>
          <Icon
            style={styles.socialIcon}
            type="MaterialCommunityIcons"
            name="facebook-box"
          />
        </Button>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center"
  },

  socialIconsRow: {
    justifyContent: "center",
    marginTop: 5
  },

  socialIcon: {
    marginLeft: 8,
    marginRight: 8
  }
});

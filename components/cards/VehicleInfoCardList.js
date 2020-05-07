import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import {
  Thumbnail,
  Left,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  View,
  Separator,
} from "native-base";
import { styles } from "../../styles/components/cards/VehicleInfoCardList";
import { numberWithCommas } from "../../utils/index";

export default class VehicleInfoCardList extends PureComponent {
  render() {
    const { data = [] } = this.props;
    return (
      <Content padder>
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={({ item }) => {
            const {
              year,
              make,
              model,
              trim,
              price,
              mileage,
              mileageType,
            } = item;

            const yearAndMake = `${year} ${make}`;
            const modelAndTrim = `${model} ${trim}`;
            const mileageAndType =
              mileage && `${numberWithCommas(mileage)} ${mileageType}`;
            const formattedPrice = `$${numberWithCommas(price)}`;

            return (
              <View>
                <Card style={styles.card}>
                  <CardItem style={styles.cardItem}>
                    <Left>
                      <Thumbnail
                        source={require("../../assets/images/vehicles/car.png")}
                      />
                      <Body>
                        <View style={styles.cardBody}>
                          <View>
                            <Text uppercase style={styles.yearAndMake}>
                              {yearAndMake}
                            </Text>
                            <Text uppercase note style={styles.modelAndTrim}>
                              {modelAndTrim}
                            </Text>
                          </View>

                          <View>
                            <Text uppercase style={styles.price}>
                              {formattedPrice}
                            </Text>
                            <Text uppercase note style={styles.mileage}>
                              {mileageAndType}
                            </Text>
                          </View>
                        </View>
                      </Body>
                    </Left>
                  </CardItem>
                </Card>
              </View>
            );
          }}
        />
      </Content>
    );
  }
}

/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Images from '../themes/Images';
import ButtonItem from '../components/ButtonItem';
import Icon from 'react-native-vector-icons/kindicare';

const RatingItem = (props) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.titleContainer}>
        <Icon name="ic-moneyflower" style={styles.iconRating} size={18} color="#DB147F" />
        <Text style={styles.RatingType}>Value For Money For The Area</Text>
      </View>
      <View>
        <View style={styles.btnContainer}>
          <ButtonItem title="Good" />
          <ButtonItem title="Very Good" />
          <ButtonItem title="Excellent" />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ratingContainer: {
    marginTop: 23,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconRating: {
    tintColor: '#DB147F',
  },
  RatingType: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 10,
  },
});
export default RatingItem;

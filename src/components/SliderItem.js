/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';
import Icon from 'react-native-vector-icons/kindicare';

const SliderItem = (props) => {
  return (
    <View style={styles.sliderItem}>
      <View style={styles.ratingItem}>
        <Icon name={props.imageName} style={styles.iconRating} size={18} color="#DB147F" />
        <Text style={styles.RatingType}>{props.title}</Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 13 }}>
          <Text style={styles.textRating}>{props.min}</Text>
          <Text style={styles.textRating}>{props.max}</Text>
        </View>
        <Slider
          minimumValue={0}
          maximumValue={50}
          minimumTrackTintColor="#DB147F"
          maximumTrackTintColor="#C0C0C0"
          thumbTintColor="#C0C0C0"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  sliderItem: {
    paddingHorizontal: 20,
  },
  ratingItem: {
    flexDirection: 'row',
  },
  iconRating: {
    marginRight: 10,
    tintColor: 'black',
    tintColor: '#DB147F',
  },
  textRating: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
  },
  RatingType: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default SliderItem;

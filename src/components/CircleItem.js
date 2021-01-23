/* eslint-disable no-undef */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/kindicare';

const CircleItem = (props) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  return (
    <TouchableOpacity
      style={[
        styles.touchableStyle,
        {
          width: (SCREEN_WIDTH - 40) / 4,
        },
      ]}
    >
      <View style={[styles.imageContainer, { borderColor: props.styleColor }]}>
        <Icon
          name={props.imageName}
          style={styles.iconChildCare}
          size={24}
          color={props.styleColor}
        />
      </View>
      {props.styleColor ? (
        <Text style={styles.textItemColor}>{props.title}</Text>
      ) : (
        <Text style={styles.textItem}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  touchableStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  textItem: {
    marginTop: 10,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.06,
    textAlign: 'center',
    display: 'flex',
    color: '#ABA7A7',
    width: 80,
  },
  textItemColor: {
    marginTop: 10,
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.06,
    textAlign: 'center',
    display: 'flex',
    color: '#DB147F',
    width: 80,
  },
});
export default CircleItem;

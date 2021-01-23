/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ButtonItem = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.btnRating}>
        <Text style={styles.textRating}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btnRating: {
    borderRadius: 5,
    borderColor: '#DB147F',
    width: 91,
    height: 34,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRating: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
  },
});
export default ButtonItem;

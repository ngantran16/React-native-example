import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const DateItem = (props) => {
  return props.chosen ? (
    <TouchableOpacity style={[{}, styles.circleItem, styles.backgroundColorDate]}>
      <Text style={[{}, styles.textDate, styles.textColor]}>{props.date}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.circleItem}>
      <Text style={styles.textDate}>{props.date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleItem: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  textDate: {
    color: '#5C595A',
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
  },
  textColor: {
    color: 'white',
  },
  backgroundColorDate: {
    backgroundColor: '#DB147F',
  },
});

export default DateItem;

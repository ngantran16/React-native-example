/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ServiceItem = (props) => {
  return props.chosen ? (
    <TouchableOpacity style={[{}, styles.service, { backgroundColor: '#DB147F' }]}>
      <Text style={[{}, styles.textService, { color: 'white' }]}>{props.name}</Text>
      <Text style={[{}, styles.textServicePrice, { color: 'white' }]}>{props.price}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.service}>
      <Text style={styles.textService}>{props.name}</Text>
      <Text style={styles.textServicePrice}>{props.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    backgroundColor: '#F2F2F2',
    height: 32,
    alignItems: 'center',
    marginTop: 10,
  },
  textService: {
    marginLeft: 10,
    color: '#5C595A',
    fontFamily: 'Mulish',
    fontSize: 14,
    lineHeight: 22,
  },
  textServicePrice: {
    marginRight: 10,
    color: '#5C595A',
  },
});

export default ServiceItem;

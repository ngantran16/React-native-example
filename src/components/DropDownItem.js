/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDownItem = (props) => {
  return (
    <DropDownPicker
      items={props.item}
      defaultIndex={1}
      containerStyle={{ height: 40 }}
      itemStyle={{
        justifyContent: 'flex-start',
      }}
      dropDownStyle={{
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#DB147F',
        paddingHorizontal: 20,
      }}
      onChangeItem={(item) => console.log(item.label, item.value)}
      style={styles.dropStyle}
      labelStyle={styles.labelItem}
      activeItemStyle={styles.activeStyle}
    />
  );
};
const styles = StyleSheet.create({
  dropStyle: {
    borderColor: '#DB147F',
    borderWidth: 1,
    borderRadius: 3,
    color: '#DB147F',
  },
  labelItem: {
    color: '#2D1F21',
  },
  activeStyle: {
    backgroundColor: '#DB147F',
    color: 'white',
  },
});
export default DropDownItem;

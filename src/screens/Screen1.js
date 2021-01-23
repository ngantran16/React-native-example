/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SliderItem from '../components/SliderItem';
import DropDownItem from '../components/DropDownItem';
import CircleItem from '../components/CircleItem';
import RatingItem from '../components/RatingItem';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/kindicare';

const Screen1 = () => {
  const onFindChildCare = () => {
    Navigation.push('MyStack', {
      component: {
        name: 'Screen2',
        options: {
          topBar: {
            title: {
              text: 'Application',
            },
          },
        },
      },
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.addressContainer}>
          <Icon name="ic-2pinmap" style={styles.iconAddress} size={20} />
          <Text numberOfLines={1} style={styles.textHeader}>
            6 Leigh Place, West Pennant Hills ...{' '}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.textChange}>Change</Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 25 }}>
        <Text style={styles.serviceType}>Choose Service Type</Text>
        <View style={styles.containerItem}>
          <CircleItem title="Child Care Center" imageName="ic-baby" />
          <CircleItem title="Pre-school $ Kindergarten" imageName="ic-abc" styleColor="#DB147F" />
          <CircleItem title="Family Day Care" imageName="ic-family" />
          <CircleItem title="Before & After School Care" imageName="ic-bag" />
        </View>
      </View>

      <View style={{ marginTop: 53 }}>
        <SliderItem title="KindiCare Rating" min="8.0" max="10.0" imageName="ic-kindi" />
      </View>

      <View style={{ marginTop: 28 }}>
        <SliderItem
          title="The shorted distance from home"
          min="0 km"
          max="50 km"
          imageName="ic-2pinmap"
        />
      </View>

      <RatingItem />
      <View style={{ marginTop: 28 }}>
        <SliderItem title="Cost Per Day" min="$55" max="$127" imageName="ic-cost" />
      </View>

      <View style={styles.paddingStyle}>
        <View style={{ flexDirection: 'row', marginBottom: 18 }}>
          <Icon name="ic-nqsrating" style={styles.iconCost} size={18} color="#DB147F" />
          <Text style={styles.textDrop}>National Quality Standard Rating</Text>
        </View>
        <DropDownItem
          item={[
            { label: 'Exceeding or Excellent NQS', value: 'item1' },
            { label: 'Meeting NQS', value: 'item2' },
            { label: 'Working Towards NQS', value: 'item3' },
            { label: 'Significant Improvement Required', value: 'item4' },
            { label: 'Not Rated or Provisional Rating', value: 'item5' },
          ]}
        />
      </View>

      <View style={styles.paddingStyle}>
        <View style={{ flexDirection: 'row', marginBottom: 18 }}>
          <Icon name="ic-sort" size={18} color="#DB147F" />
          <Text style={styles.textDrop}>Sort Results By</Text>
        </View>
        <DropDownItem
          item={[
            { label: 'Highest KindiCare Rating', value: 'item1' },
            { label: 'Featured', value: 'item2' },
            { label: 'Shortest Distance', value: 'item3' },
            { label: 'Highest Cost Per Day', value: 'item4' },
            { label: 'Lowest Cost Per Day', value: 'item5' },
            { label: 'Date Of Rating', value: 'item6' },
          ]}
        />
      </View>

      <View style={styles.paddingStyle}>
        <TouchableOpacity style={styles.findBtn} onPress={() => onFindChildCare()}>
          <Text style={styles.findText}>Find Childcare</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconAddress: {
    color: '#2D1F21',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textHeader: {
    fontFamily: 'SF Pro Text',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 23,
    color: '#2D1F21',
    marginLeft: 5,
  },
  textChange: {
    color: '#DB147F',
    fontFamily: 'SF Pro Text',
    fontWeight: '700',
    fontSize: 10,
    marginLeft: 30,
  },
  serviceType: {
    color: '#DB147F',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 23,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  textDrop: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 10,
  },
  iconCost: {
    tintColor: '#DB147F',
  },
  findText: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
  },
  findBtn: {
    backgroundColor: '#DB147F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: 48,
    marginBottom: 20,
  },
  paddingStyle: {
    marginTop: 28,
    paddingHorizontal: 20,
  },
});

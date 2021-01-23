/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/kindicare';
import DateItem from '../components/DateItem';
import ServiceItem from '../components/ServiceItem';

const Screen2 = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Children Information</Text>
        <Text style={styles.textDetail}>
          You can choose which children want to apply by clicking on their name and editing the
          information by clicking on the pen icon
        </Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.nameContainer}>
          <View style={styles.titleName}>
            <Text style={styles.name}>Wesley Perry</Text>
            <Icon name="ic-boy" size={20} color="#32A4FC" />
          </View>
          <TouchableOpacity style={styles.penEdit}>
            <Icon name="ic-pen" size={15} color="#DB147F" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textInTable}>04-04-2018</Text>
        </View>

        <View style={styles.allergiesContent}>
          <Text style={styles.textInTable}>Allergies: No</Text>
          <Text style={styles.textInTable}>Special need: No</Text>
        </View>

        <View>
          <Text style={styles.textInTable}>Day care require:</Text>
          <View style={styles.dateCircle}>
            <DateItem date="Mon" chosen={true} />
            <DateItem date="Tue" chosen={false} />
            <DateItem date="Web" chosen={true} />
            <DateItem date="Thu" chosen={false} />
            <DateItem date="Fri" chosen={true} />
            <DateItem date="Sat" chosen={false} />
            <DateItem date="Sun" chosen={false} />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.textInTable}>Service: </Text>
          <View>
            <ServiceItem name="Family Day Care" price="110$" chosen={true} />
            <ServiceItem name="Child Care Centre" price="140$" chosen={false} />
            <ServiceItem name="Pre-school & Kindergarten" price="270$" chosen={false} />
            <ServiceItem name="Before and After School Care" price="299$" chosen={false} />
          </View>
        </View>
      </View>

      <View style={styles.table2Container}>
        <View style={{ marginBottom: 15 }}>
          <View style={styles.nameContainer}>
            <View style={styles.titleName}>
              <Text style={styles.name}>Kathryn Murphy</Text>
              <Icon name="ic-girl" size={20} color="#DB147F" />
            </View>
            <TouchableOpacity style={styles.penEdit}>
              <Icon name="ic-pen" size={15} color="#DB147F" />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.textInTable}>04-04-2018</Text>
          </View>

          <View style={styles.allergiesContent}>
            <Text style={styles.textInTable}>Allergies: No</Text>
            <Text style={styles.textInTable}>Special need: No</Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.textAddChild}>+ Add New Child</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnDone}>
        <Text style={styles.textDone}>Done</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 23,
  },
  titleContainer: {
    marginTop: 10,
  },
  textDetail: {
    fontFamily: 'Mulish',
    fontSize: 12,
    lineHeight: 17,
    color: '#857E7F',
    marginTop: 4,
    letterSpacing: 0.02,
  },
  titleName: {
    flexDirection: 'row',
  },
  name: {
    marginRight: 10,
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.02,
  },
  tableContainer: {
    marginTop: 24,
    borderRadius: 4,
    borderColor: '#DB147F',
    borderWidth: 1,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  penEdit: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DB147F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInTable: {
    fontFamily: 'Mulish',
    fontSize: 14,
    lineHeight: 22,
    color: '#857E7F',
    marginTop: 8,
  },
  allergiesContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateCircle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  table2Container: {
    marginTop: 24,
    borderRadius: 4,
    borderColor: '#D3CCCC',
    borderWidth: 1,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  textAddChild: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: '#DB147F',
    marginTop: 24,
    textDecorationLine: 'underline',
  },
  btnDone: {
    backgroundColor: '#DB147F',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 39,
    marginBottom: 20,
    borderRadius: 4,
  },
  textDone: {
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
  },
});

export default Screen2;

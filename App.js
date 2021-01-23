// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import { Text, View } from 'react-native';

// const YourApp = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Try editing me! 🎉</Text>
//     </View>
//   );
// };

// export default YourApp;

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
// Home screen declaration
const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.button}>
        <Button
          title="Search Filters"
          color="#87CEFF"
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'Screen1',
                options: {
                  topBar: {
                    title: {
                      text: 'Search Filters',
                    },
                  },
                },
              },
            })
          }
        />
      </View>
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#00008B',
    },
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Screen1', () => Screen1);
Navigation.registerComponent('Screen2', () => Screen2);
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'MyStack',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'whitesmoke',
    padding: 20,
  },
  button: {
    marginBottom: 20,
    width: 250,
    marginLeft: 60,
  },
});

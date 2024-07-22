/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  NavigationContainer,
  createNavigatorFactory,
} from '@react-navigation/native';

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

// don't worry about the type error here

function App(): React.JSX.Element {
  const Drawer = createDrawerNavigator();
  console.log(Drawer);
  return (
    <SafeAreaView>
      <View style={{flex: 1}}>
        <NavigationContainer >
          <Drawer.Navigator initialRouteName='Home'>
            <Drawer.Screen name="Home" component={() => <Text>Home</Text>} />
            <Drawer.Screen
              name="Settings"
              component={() => <Text>Settings</Text>}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

export default App;

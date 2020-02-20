import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Service from './services.component';
import ServiceList from './serviceList.component';
import Shop from './shop/index';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Services" component={Service} />
    <Stack.Screen name="ServiceList" component={ServiceList} />
    <Stack.Screen name="Shop" component={Shop} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator navigation={Stack} />
  </NavigationContainer>
);

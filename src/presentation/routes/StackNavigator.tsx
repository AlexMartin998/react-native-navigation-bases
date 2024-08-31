import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {NavigationRoutesEnum} from './navigation.enum';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // Customizar el header de la app
      screenOptions={{
        headerShown: true, // x default
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name={NavigationRoutesEnum.home} component={HomeScreen} />
      <Stack.Screen
        name={NavigationRoutesEnum.products}
        component={ProductsScreen}
      />
      <Stack.Screen
        name={NavigationRoutesEnum.settings}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

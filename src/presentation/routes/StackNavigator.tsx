import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductScreen} from '../screens/products/ProductScreen';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {NavigationRoutesEnum} from './navigation.enum';

export type RootStackParams = {
  HomeScreen: undefined;
  ProductsScreen: undefined;
  ProductScreen: {id: number; name: string};
  SettingsScreen: undefined;
};
export type NavigationRootPropType = NavigationProp<RootStackParams>;

const Stack = createStackNavigator<RootStackParams>();

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
        name={NavigationRoutesEnum.product}
        component={ProductScreen}
      />
      <Stack.Screen
        name={NavigationRoutesEnum.settings}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
};

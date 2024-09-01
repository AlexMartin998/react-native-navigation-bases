import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';

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
  // hide Bottom tab navigator header in this stack screen to only show the stack header in this tab (bottom tab navigator)
  const navigator = useNavigation<NavigationRootPropType>();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

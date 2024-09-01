import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import {StackNavigator} from '.';
import {ProfileScreen} from '../screens/profile/ProfileScreen';

const Drawer = createDrawerNavigator();

export const SideNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

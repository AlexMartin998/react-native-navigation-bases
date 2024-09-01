import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';

import {globalColors} from '../../config/theme/theme';
import {HamburgerMenu} from '../components/shared/HamburgerMenu';
import {ExtraScreen} from '../screens/extras/ExtraScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      {/* no se puede colocar dentro del tab navigator */}
      <HamburgerMenu />

      <Tab.Navigator
        //* custom styles ---------------------
        sceneContainerStyle={{
          backgroundColor: globalColors.white,
        }}>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Extra" component={ExtraScreen} />
      </Tab.Navigator>
    </>
  );
};

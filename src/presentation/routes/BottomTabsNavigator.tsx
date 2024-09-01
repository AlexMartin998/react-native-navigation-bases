/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

// react-navigation -> tabs
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {globalColors} from '../../config/theme/theme';
import {IonIcons} from '../components/shared/IonIcons';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {TopTabsNavigator} from './TopTabsNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      //* custom styles ---------------------
      sceneContainerStyle={{
        backgroundColor: globalColors.white,
      }}
      screenOptions={{
        // active color
        tabBarActiveTintColor: globalColors.primary,

        // headerShown: false, // hide header
        tabBarLabelStyle: {
          marginBottom: 5,
        },

        // remove elevation in android and shadow in ios
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        // name to navigate
        name="Tab1"
        options={{
          // title in the tab
          title: 'Tab1',
          // custom icon FC: color (active or inactive)
          tabBarIcon: ({color}) => (
            <IonIcons name="airplane-outline" size={24} color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => (
            <IonIcons name="accessibility-outline" size={24} color={color} />
          ),
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => (
            <IonIcons name="bar-chart-outline" size={24} color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};

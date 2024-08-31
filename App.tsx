import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';

export const App = () => {
  return (
    // Navigation already has a SafeAreaView
    <NavigationContainer>
      <Text>App</Text>
    </NavigationContainer>
  );
};

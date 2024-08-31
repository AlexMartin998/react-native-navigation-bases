import './src/config/navigation/gesture-handler.native';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './src/presentation/routes/StackNavigator';

export const App = () => {
  return (
    // Navigation already has a SafeAreaView
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

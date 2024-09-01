import './src/config/navigation/gesture-handler.native';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

// drawernavigator
import {SideNav} from './src/presentation/routes/SideNav';

export const App = () => {
  return (
    // Navigation already has a SafeAreaView & provee props a los screens pero es mejor W con el hook
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideNav />
    </NavigationContainer>
  );
};

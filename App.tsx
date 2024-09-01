import './src/config/navigation/gesture-handler.native';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

// drawer navigator
import {SideNav} from './src/presentation/routes/SideNav';

export const App = () => {
  return (
    // Navigation already has a SafeAreaView & provee props a los screens pero es mejor W con el hook
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideNav />


      {/* lo podria mostrar aqui, pero seria el unico navigator, en esta app quiero q este bottom navigator sea accesible a traves de mi Drawer Navigato */}
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
};

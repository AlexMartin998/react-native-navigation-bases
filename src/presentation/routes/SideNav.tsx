/* eslint-disable react/no-unstable-nested-components */
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';

import {StackNavigator} from '.';
import {globalColors} from '../../config/theme/theme';
import {ProfileScreen} from '../screens/profile/ProfileScreen';

const Drawer = createDrawerNavigator();

export const SideNav = () => {
  // dimensiones de la pantalla
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      ////* custom drawer content ---------------------
      // sobrescribe todo el contenido del drawer
      drawerContent={props => <CustomDrawerContent {...props} />}
      ////* personalizar drawer menu ---------------------
      screenOptions={{
        headerShown: false, // hide header to only show stack header

        // customizar la aparición del drawer: (condicionar basado el las dimensiones de pantalla)
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide', // 'permanent' (si es tablet) o 'front' (si es mobile)
        // drawerType: 'slide', // slide over the content en iOS & Android

        drawerActiveBackgroundColor: globalColors.primary, // color de fondo del item seleccionado
        drawerActiveTintColor: globalColors.white, // color del texto del item seleccionado
        drawerInactiveTintColor: globalColors.primary, // color del texto del item no seleccionado
        // estilo de los items:
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    // debemos retornar un drawer
    <DrawerContentScrollView>
      <View style={styles.containerScrollView} />

      {/* el content ya definido antes en el drawer (los nav items) */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  containerScrollView: {
    height: 100,
    backgroundColor: globalColors.primary,
    margin: 30,
    borderRadius: 50,
  },
});

/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

// react-navigation
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {GlobalStyles} from '../../../config/theme/theme';
import {PrimaryButton} from '../../components/shared';
import {NavigationRootPropType, NavigationRoutesEnum} from '../../routes';

export const HomeScreen = () => {
  // navigation
  const navigation = useNavigation<NavigationRootPropType>();

  // hamburger menu - drawer (in this screen header only)
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          // toggle drawer
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.btnContainer}>
        <PrimaryButton
          label="Products"
          // navigate by name in StackNavigator
          onPress={() => navigation.navigate(NavigationRoutesEnum.products)}
        />

        <PrimaryButton
          label="Settings"
          onPress={() => navigation.navigate(NavigationRoutesEnum.settings)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    gap: 10,
  },
});

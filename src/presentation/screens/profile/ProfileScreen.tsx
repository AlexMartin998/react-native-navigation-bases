import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// insets: son los margenes seguros del dispositivo
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// react-navigation
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {GlobalStyles} from '../../../config/theme/theme';
import {PrimaryButton} from '../../components/shared';
import {NavigationRootPropType} from '../../routes';

export const ProfileScreen = () => {
  // // insets: son los margenes seguros del dispositivo
  // top: Android: StatusBar (0), iOS: StatusBar + Notch (54)
  const {top} = useSafeAreaInsets();

  // toggle drawer
  const navigation = useNavigation<NavigationRootPropType>();

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: top + 20, // safe area -> top
        },
      ]}>
      <Text style={GlobalStyles.title}>Profile</Text>

      <PrimaryButton
        label="Open Menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

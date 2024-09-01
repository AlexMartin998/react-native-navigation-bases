import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';

import {GlobalStyles} from '../../../config/theme/theme';
import {PrimaryButton} from '../../components/shared';
import {NavigationRootPropType} from '../../routes';

export const SettingsScreen = () => {
  const navigator = useNavigation<NavigationRootPropType>();

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>SettingsScreen</Text>

      <View style={styles.btnContainer}>
        <PrimaryButton
          label="Go back"
          onPress={() => {
            // navigate to the previous screen
            navigator.goBack();
          }}
        />

        <PrimaryButton
          label="Go to Home"
          onPress={() => {
            // navigate to the 1st screen in the stack
            navigator.dispatch(StackActions.popToTop());
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    gap: 10,
  },
});

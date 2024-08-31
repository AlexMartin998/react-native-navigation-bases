import React from 'react';
import {StyleSheet, View} from 'react-native';

// react-navigation
import {useNavigation} from '@react-navigation/native';

import {GlobalStyles} from '../../../config/theme/theme';
import {PrimaryButton} from '../../components/shared';
import {NavigationRoutesEnum} from '../../routes';

export const HomeScreen = () => {
  // navigation
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.btnContainer}>
        <PrimaryButton
          label="Products"
          // navigate by name in StackNavigator
          onPress={() =>
            navigation.navigate(NavigationRoutesEnum.products as never)
          }
        />

        <PrimaryButton
          label="Settings"
          onPress={() =>
            navigation.navigate(NavigationRoutesEnum.settings as never)
          }
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

import React from 'react';
import {StyleSheet, View} from 'react-native';

// react-navigation
import {useNavigation} from '@react-navigation/native';

import {GlobalStyles} from '../../../config/theme/theme';
import {PrimaryButton} from '../../components/shared';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import {NavigationRootPropType, NavigationRoutesEnum} from '../../routes';

export const HomeScreen = () => {
  // // navigation
  const navigation = useNavigation<NavigationRootPropType>();

  // // hamburger menu - drawer (in this screen header only)
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable
  //         // toggle drawer
  //         onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
  //         <Text>Menu</Text>
  //       </Pressable>
  //     ),
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <View style={GlobalStyles.container}>
      <HamburgerMenu />

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

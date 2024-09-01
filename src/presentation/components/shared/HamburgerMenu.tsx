import React, {useEffect} from 'react';

import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Pressable, Text} from 'react-native';

export const HamburgerMenu = () => {
  ///* hamburger menu ---------------------
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderLeftComponent navigation={navigation} />,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

const HeaderLeftComponent = ({navigation}: {navigation: any}) => (
  <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
    <Text>Menu</Text>
  </Pressable>
);

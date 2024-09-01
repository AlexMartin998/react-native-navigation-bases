import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable} from 'react-native';

import {globalColors} from '../../../config/theme/theme';
import {IonIcons} from './IonIcons';

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
  <Pressable
    style={{marginLeft: 10}}
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
    <IonIcons name="menu-outline" size={24} color={globalColors.primary} />
  </Pressable>
);

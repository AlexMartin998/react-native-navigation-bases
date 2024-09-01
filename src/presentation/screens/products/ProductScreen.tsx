import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {GlobalStyles} from '../../../config/theme/theme';
import {
  NavigationRootPropType,
  NavigationRoutesEnum,
  RootStackParams,
} from '../../routes';

export const ProductScreen = () => {
  // get params from route
  const {id, name} =
    useRoute<RouteProp<RootStackParams, NavigationRoutesEnum.product>>()
      ?.params;

  // set custom title in header
  const navigation = useNavigation<NavigationRootPropType>();

  useEffect(() => {
    navigation.setOptions({title: name});
  }, [name, navigation]);

  return (
    <View style={GlobalStyles.container}>
      <Text style={styles.title}>
        ProductScreen: {name} - {id}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
});

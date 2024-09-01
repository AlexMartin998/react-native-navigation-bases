import React from 'react';
import {Text, View} from 'react-native';

import {GlobalStyles} from '../../../config/theme/theme';

export const ProfileScreen = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Profile</Text>
    </View>
  );
};

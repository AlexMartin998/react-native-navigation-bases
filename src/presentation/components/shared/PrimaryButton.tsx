import React from 'react';

import {Pressable, Text} from 'react-native';
import {GlobalStyles} from '../../../config/theme/theme';

export type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
  onLongPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={GlobalStyles.primaryButton}>
      <Text style={GlobalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

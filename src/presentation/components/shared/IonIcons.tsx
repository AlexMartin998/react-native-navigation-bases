import React from 'react';

import IonIcon from 'react-native-vector-icons/Ionicons';

interface IonIconsProps {
  name: string;
  size?: number;
  color?: string;
}

export const IonIcons = ({name, size = 24, color = 'black'}: IonIconsProps) => {
  return <IonIcon name={name} size={size} color={color} />;
};

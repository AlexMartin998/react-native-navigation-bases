import React from 'react';
import {Text, View} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';
import {GlobalStyles} from '../../../config/theme/theme';
import {PrimaryButton} from '../../components/shared';
import ProductsCard from '../../components/shared/ProductsCard';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutesEnum} from '../../routes';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Producto 4',
    description: 'Descripción del producto 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Producto 5',
    description: 'Descripción del producto 5',
    price: 500,
  },
  {
    id: 6,
    name: 'Producto 6',
    description: 'Descripción del producto 6',
    price: 600,
  },
  {
    id: 7,
    name: 'Producto 7',
    description: 'Descripción del producto 7',
    price: 700,
  },
  {
    id: 8,
    name: 'Producto 8',
    description: 'Descripción del producto 8',
    price: 800,
  },
  {
    id: 9,
    name: 'Producto 9',
    description: 'Descripción del producto 9',
    price: 900,
  },
];

export const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.container}>
      <Text style={[GlobalStyles.title]}>Productos</Text>

      {/* =========== FlatList =========== */}
      <FlatList
        data={products}
        // condiciona el renderizado - lazyload, solo renderiza los q caben
        renderItem={({item}) => <ProductsCard {...item} />}
      />

      <Text style={GlobalStyles.title}>Settings</Text>
      <PrimaryButton
        label="Ajustes"
        onPress={() =>
          navigation.navigate(NavigationRoutesEnum.settings as never)
        }
      />
    </View>
  );
};

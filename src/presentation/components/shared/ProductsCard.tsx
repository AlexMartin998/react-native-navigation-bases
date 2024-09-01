import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {type NavigationRootPropType, NavigationRoutesEnum} from '../../routes';

export type ProductsCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const ProductsCard: React.FC<ProductsCardProps> = ({
  id,
  description,
  name,
  price,
}) => {
  // const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const navigation = useNavigation<NavigationRootPropType>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.textPrice}>{`Precio: ${price}`}</Text>
      <Pressable
        style={styles.primaryButton}
        onPress={() =>
          navigation.navigate(NavigationRoutesEnum.product, {
            id,
            name,
          })
        }>
        <Text style={styles.buttonText}>Ver detalle</Text>
      </Pressable>
    </View>
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginBottom: 20,
    elevation: 0.2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  textPrice: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  primaryButton: {
    backgroundColor: '#121619',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#f5f5f5',
    fontSize: 18,
  },
});

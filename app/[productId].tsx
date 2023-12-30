import { Stack, useLocalSearchParams } from 'expo-router';

import { Detail } from '@/templates/Detail';
import { products } from '@/data/products';

const ProductScreen = () => {
  const { productId } = useLocalSearchParams<{ productId: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Detail product={products.find(({id}) => id === productId)} />
    </>
  );
}

export default ProductScreen;

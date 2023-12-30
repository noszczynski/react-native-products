import { Image, SafeAreaView, Text, View } from 'react-native';
import { Product } from '@/data/products';

export function Detail({ product }: { product: Product }) {
  return <SafeAreaView className="flex-1 bg-gray-50 py-8">
    <Image
      resizeMode="contain"
      source={{
        uri: product.imageUrl
      }}
      className="h-32 items-center justify-center"
    />
    <View>
      <Text>{product.name}</Text>
    </View>
  </SafeAreaView>;
}
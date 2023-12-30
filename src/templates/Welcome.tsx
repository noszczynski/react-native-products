import { FlashList } from '@shopify/flash-list';
import { Image, SafeAreaView, Text, View } from 'react-native';

import type { Product } from '@/data/products';
import { products } from '@/data/products';
import { Link } from 'expo-router';

function ListHeaderComponent() {
  return (
    <View className="mb-4">
      <Text className="text-2xl font-medium">Products</Text>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Text className="text-md mt-2">Search for: "iPhone"</Text>
    </View>
  );
}

function ItemSeparatorComponent() {
  return <View className="h-2 w-2" />;
}

const Welcome = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 py-8">
      <View className="mt-4 flex-1 px-4">
        <FlashList<Product>
          data={products}
          estimatedItemSize={256}
          horizontal={false}
          numColumns={2}
          ListHeaderComponent={ListHeaderComponent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={({ item, index }) => (
            <View
              className="grow"
              style={[
                index % 2 === 0
                  ? {
                    paddingRight: 4
                  }
                  : {
                    paddingLeft: 4
                  }
              ]}
            >
              <View
                className="w-full rounded-2xl border border-gray-300 bg-white overflow-hidden"
              >
                <Link href={`/${item.id}`}>
                  <View className="flex flex-col p-3 bg-blue-200">
                    <Image
                      resizeMode="contain"
                      source={{
                        uri: item.imageUrl
                      }}
                      width={128}
                      height={128}
                      style={{
                        backgroundColor: "red"
                      }}
                    />
                    <Text className="mt-2" numberOfLines={2}>
                      {item.name}
                    </Text>
                    <Text className="mt-2 font-medium" numberOfLines={1}>
                      {Intl.NumberFormat('pl-PL', {
                        style: 'currency',
                        currency: 'PLN'
                      }).format(item.price / 100)}
                    </Text>
                  </View>
                </Link>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export { Welcome };

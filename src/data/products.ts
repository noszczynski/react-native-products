export interface Feature {
  name: string;
  value: string | string[];
}

export interface Product {
  id: string;
  sku: number;
  name: string;
  imageUrl: string;
  price: number;
  producer: string;
  features: Feature[];
  createdAt: string;
  updatedAt: string;
}

export const products: Product[] = [
  {
    id: '49875212-9644-439e-af65-53cf9be371e5',
    sku: 0,
    name: 'Apple iPhone 13 256GB Pink',
    price: 389900,
    producer: "Apple",
    imageUrl:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_22_29_59_101_08.jpg',
    features: [],
    createdAt: '2023-12-11 18:34:28.738',
    updatedAt: '2023-12-11 18:34:28.738',
  },
  {
    id: '55c1b2ea-4305-4a4c-be00-3b203dc7a06e',
    sku: 1,
    name: 'Apple iPhone 13 256GB (PRODUCT)RED',
    price: 397900,
    producer: "Apple",
    imageUrl:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_22_11_0_69_08.jpg',
    features: [],
    createdAt: '2023-12-11 18:24:17.112',
    updatedAt: '2023-12-11 18:24:17.112',
  },
  {
    id: 'abf9a04c-1912-416e-a865-35bbc9a42dd8',
    sku: 2,
    name: 'Apple iPhone 13 256GB Starlight',
    price: 389900,
    producer: "Apple",
    imageUrl:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_22_6_58_326_08.jpg',
    features: [],
    createdAt: '2023-12-11 18:36:57.931',
    updatedAt: '2023-12-11 18:36:57.931',
  },
  {
    id: 'e22650f5-914b-40f9-9c64-006ee6405c75',
    sku: 3,
    name: 'Apple iPhone 13 256GB Alpine Green',
    price: 389900,
    producer: "Apple",
    imageUrl:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_22_15_9_580_09.jpg',
    features: [],
    createdAt: '2023-12-11 18:37:32.313',
    updatedAt: '2023-12-11 18:37:32.313',
  },
  {
    id: 'e22650f5-914b-40f9-9c64-006ee6405c76',
    sku: 4,
    name: 'Apple iPhone 13 Pro 128GB Silver',
    price: 119900,
    producer: "Apple",
    imageUrl:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_22_15_9_580_09.jpg',
    features: [],
    createdAt: '2023-12-11 18:54:19.89',
    updatedAt: '2023-12-11 18:54:19.89',
  },
  {
    id: 'e22650f5-914b-40f9-9c64-006ee6405c77',
    sku: 5,
    name: 'Apple iPhone 13 Pro 256GB Gold',
    price: 129900,
    producer: "Apple",
    imageUrl:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_22_15_9_580_09.jpg',
    features: [],
    createdAt: '2023-12-11 18:54:19.89',
    updatedAt: '2023-12-11 18:54:19.89',
  },
  {
    id: 'e22650f5-914b-40f9-9c64-006ee6405c78',
    sku: 6,
    name: 'Apple iPhone 13 Pro 512GB Graphite',
    price: 149900,
    producer: "Apple",
    imageUrl:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_22_15_9_580_09.jpg',
    features: [],
    createdAt: '2023-12-11 18:54:19.89',
    updatedAt: '2023-12-11 18:54:19.89',
  },
  {
    id: 'e2a95fd7-5371-49d9-b8db-5657e19b8908',
    sku: 7,
    name: 'Apple iPhone 13 256GB Midnight',
    price: 389900,
    producer: "Apple",
    imageUrl:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_22_25_18_614_08.jpg',
    features: [],
    createdAt: '2023-12-10 23:09:00.398',
    updatedAt: '2023-12-11 00:08:51',
  },
  {
    id: 'f913de32-cc57-4892-a1bb-422595a0c9fc',
    sku: 8,
    name: 'Apple iPhone 13 256GB Blue',
    price: 389900,
    producer: "Apple",
    imageUrl:
      'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_22_22_20_21_34_08.jpg',
    features: [],
    createdAt: '2023-12-11 18:33:38.947',
    updatedAt: '2023-12-11 18:33:38.947',
  },
];

import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";
import product5 from "./assets/products/5.png";
import product6 from "./assets/products/6.webp";
import product7 from "./assets/products/7.webp";
import product8 from "./assets/products/8.webp";

export const PRODUCTS = [
  {
    id: 1,
    productName: "IPhone",
    price: 999.0,
    productImage: product1,
  },
  {
    id: 2,
    productName: "Macbook Pro 2022 (M1)",
    price: 1999.0,
    productImage: product2,
  },
  {
    id: 3,
    productName: "Cannon M50 Camera",
    price: 699.0,
    productImage: product3,
  },
  {
    id: 4,
    productName: "WLS Van Gogh Denim Jacket",
    price: 228.0,
    productImage: product4,
  },
  {
    id: 5,
    productName: "LED Light Strips",
    price: 19.99,
    productImage: product5,
  },
  {
    id: 6,
    productName: "SPECTRUM LS TEE",
    price: 68.0,
    productImage: product6,
  },
  {
    id: 7,
    productName: "AUTO SERVICE SHIRT by GOLF WANG",
    price: 120.0,
    productImage: product7,
  },
  {
    id: 8,
    productName: "DON'T TRIP UNSTRUCTURED HAT",
    price: 40.0,
    productImage: product8,
  },
  {
    id: 8,
    productName: "I pad mini",
    price: 500.0,
    productImage: 'data:image/jpeg;base64,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',
  }
];

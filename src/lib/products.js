const productList = [
  {
    id: 1,
    title: "Operational Systems: Three Easy Pieces",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, molestias!",
    price: 9.99,
  },
  {
    id: 2,
    title: "Operational Systems: Three Easy Pieces",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, molestias!",
    price: 9.99,
  },
  {
    id: 3,
    title: "Operational Systems: Three Easy Pieces",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, molestias!",
    price: 9.99,
  },
  {
    id: 4,
    title: "Operational Systems: Three Easy Pieces",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, molestias!",
    price: 9.99,
  },
  {
    id: 5,
    title: "Operational Systems: Three Easy Pieces",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, molestias!",
    price: 9.99,
  },
  {
    id: 6,
    title: "Operational Systems: Three Easy Pieces",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, molestias!",
    price: 9.99,
  },
];

export function fetchProducts() {
  return productList;
}

export function formatAsCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

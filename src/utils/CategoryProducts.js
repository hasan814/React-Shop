export const CategoryProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
};

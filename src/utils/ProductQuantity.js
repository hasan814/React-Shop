export const ProductQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) return 0;
  else return state.selectedItems[index].quantity;
};

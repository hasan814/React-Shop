import { sumProducts } from "./SumItems";

export const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  checkout: false,
  total: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        const updatedItems = [
          ...state.selectedItems,
          { ...action.payload, quantity: 1 },
        ];
        return {
          ...state,
          selectedItems: updatedItems,
          ...sumProducts(updatedItems),
          checkout: false,
        };
      }
      return state;
    }

    case "REMOVE_ITEM": {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: newSelectedItems,
        ...sumProducts(newSelectedItems),
      };
    }
    case "INCREASE": {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (increaseIndex >= 0) {
        const updatedItems = state.selectedItems.map((item, idx) =>
          idx === increaseIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          selectedItems: updatedItems,
          ...sumProducts(updatedItems),
        };
      }
      return state;
    }

    case "DECREASE": {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (decreaseIndex >= 0) {
        const updatedItems = state.selectedItems.map((item, idx) =>
          idx === decreaseIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return {
          ...state,
          selectedItems: updatedItems,
          ...sumProducts(updatedItems),
        };
      }
      return state;
    }
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        checkout: false,
        total: 0,
      };

    default:
      return state;
  }
};

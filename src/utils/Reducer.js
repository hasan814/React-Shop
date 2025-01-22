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
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkout: false,
      };
    }
    case "REMOVE_ITEM": {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    }
    case "INCREASE": {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      return { ...state, ...sumProducts(state.selectedItems) };
    }
    case "DECREASE": {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      return { ...state, ...sumProducts(state.selectedItems) };
    }
    case "CHECKOUT": {
      return {
        selectedItems: [],
        itemsCounter: 0,
        checkout: false,
        total: 0,
      };
    }
    default:
      throw new Error("Invalid Action");
  }
};

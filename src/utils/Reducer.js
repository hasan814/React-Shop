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
      const updatedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: updatedItems,
        ...sumProducts(updatedItems),
      };
    }

    case "INCREASE": {
      const updatedItems = state.selectedItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        selectedItems: updatedItems,
        ...sumProducts(updatedItems),
      };
    }

    case "DECREASE": {
      const updatedItems = state.selectedItems.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        selectedItems: updatedItems,
        ...sumProducts(updatedItems),
      };
    }

    case "CHECKOUT": {
      return {
        ...initialState,
        checkout: true,
      };
    }

    default:
      throw new Error("Invalid Action");
  }
};

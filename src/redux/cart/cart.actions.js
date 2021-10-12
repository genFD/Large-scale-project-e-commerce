import { cartTypes } from './cart.types';
export const toggleCartHidden = () => {
  return {
    type: cartTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: cartTypes.ADD_ITEM,
    payload: item,
  };
};

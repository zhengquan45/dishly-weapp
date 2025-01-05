import { PLUS_ITEM, MINUS_ITEM, CLEAR_ITEMS } from "../constants/const";

export const plusItem = (id: number) => ({
  type: PLUS_ITEM,
  payload: id,
});

export const minusItem = (id: number) => ({
  type: MINUS_ITEM,
  payload: id,
});

export const clearItems = () => ({
  type: CLEAR_ITEMS,
});

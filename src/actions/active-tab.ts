import { SET_ACTIVE_TAB } from "../constants/const";

export const setActiveTab = (value: number) => ({
  type: SET_ACTIVE_TAB,
  payload: value,
});

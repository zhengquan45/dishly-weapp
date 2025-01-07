import { SET_ACTIVE_TAB } from "../constants/const";

interface State {
  value: number; // 表示当前活动的 Tab 的索引值
}

const INITIAL_STATE: State = {
  value: 0,
};

export default function itemsReducer(
  state = INITIAL_STATE,
  action: { type: string; payload?: any }
): State {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      const value = action.payload; // 假定 payload 是新的 Tab 索引
      return { ...state, value }; // 更新 value 值
    }
    default:
      return state; // 返回未更改的状态
  }
}
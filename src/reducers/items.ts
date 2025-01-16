import { PLUS_ITEM, MINUS_ITEM, CLEAR_ITEMS } from "../constants/const";

const INITIAL_STATE: Item[] = [];

export default function itemsReducer(
  state = INITIAL_STATE,
  action: { type: string; payload?: any }
): Item[] {
  switch (action.type) {
    case PLUS_ITEM: {
      const productItem: ProductItemProps = action.payload; // 假定 payload 是 ProductItemProps
      const newItems = [...state];
      const index = newItems.findIndex((item) => item.productItem.id === productItem.id);
      if (index > -1 && newItems[index].num < 100) {
        newItems[index].num += 1; // 数量 +1
      } else {
        newItems.push({ productItem, num: 1 }); // 新增项目
      }
      return newItems;
    }

    case MINUS_ITEM: {
      const productItem: ProductItemProps = action.payload; // 假定 payload 是 ProductItemProps
      const newItems = [...state];
      const index = newItems.findIndex((item) => item.productItem.id === productItem.id);
      if (index > -1) {
        if (newItems[index].num > 1) {
          newItems[index].num -= 1; // 数量 -1
        } else {
          newItems.splice(index, 1); // 移除项目
        }
      }
      return newItems;
    }

    case CLEAR_ITEMS:
      return []; // 清空所有项目

    default:
      return state;
  }
}

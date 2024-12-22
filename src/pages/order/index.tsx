
import './index.scss'
import { SearchBar, NoticeBar } from '@nutui/nutui-react-taro'
import { View }from '@tarojs/components'
import Delivery from './delivery'
import ProductList from './product-list'
import Cart from './cart'
import { useState } from "react";


function Order() {
  const categorys = ['午餐','晚餐','热销', '新品', '主食', '小吃', '饮料', '甜品', '水果', '零食', '其他', '全部']
  const noticeList = [
    '加入粉丝群，呼叫客服💁可领取新人券',
    '在忙也要记得按时吃饭哦🍚',
    '珍惜粮食，按需点餐～',
    '当天菜品，现买现做，拒绝预制菜',
  ]

  const [items, setItems] = useState<Item[]>([]);

  const products = [
    {
      id:1,
      name: '红烧肉',
      subname: '满12抽行李箱',
      price: 12,
      img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
    },
    {
      id:2,
      name: '鱼香肉丝',
      subname:'芳香四溢',
      price: 10,
      img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
    },
    {
      id:3,
      name: '宫保鸡丁',
      subname:'麻辣鲜香',
      price: 15,  
      img: 'https://img.yzcdn.cn/vant/apple-3.jpg',
    }];

  const plusItem = (id) => {
    const newItems = [...items];
    const index = newItems.findIndex((newItem) => newItem.id === id);
    if (index > -1 && newItems[index].num < 100) {
      newItems[index].num += 1;
    } else {
      newItems.push({ id, num: 1 });
    }
    setItems(newItems);
  }

  const minusItem = (id) => {
    const newItems = [...items];
    const index = newItems.findIndex((newItem) => newItem.id === id);
    if (index > -1 && newItems[index].num > 0) {
      newItems[index].num -= 1;
      if(newItems[index].num === 0){
        newItems.splice(index,1);
      }
    }
    setItems(newItems);
  }

  const clearItems = () => {
    setItems([]);
  }

  return (
      <View className='order-container'>
        <SearchBar className='search-container' shape="round" maxLength={5} />
        <Delivery/>
        <NoticeBar
              className='notice-container'
              direction="vertical"
              list={noticeList}
              speed={10}
              duration={2000}
            />
        <ProductList categorys={categorys} products={products} items={items} plusItem={plusItem} minusItem={minusItem}/>
        <View style={{position:'fixed',bottom:50}}>
            <Cart products={products} items={items} plusItem={plusItem} minusItem={minusItem} clearItems={clearItems}/>
        </View>
      </View>
  )
}

export default Order

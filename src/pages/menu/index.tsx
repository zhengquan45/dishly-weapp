
import './index.scss'
import { SearchBar, NoticeBar } from '@nutui/nutui-react-taro'
import { View }from '@tarojs/components'
import Delivery from '../../components/delivery'
import ProductList from './product-list'
import ProductCategory from './product-category'
import Cart from './cart'
import { useState } from 'react'

function Menu() {

  const categorys = ['午餐','晚餐','热销']
  const noticeList = [
    '加入粉丝群，呼叫客服💁可领取新人券',
    '在忙也要记得按时吃饭哦🍚',
    '珍惜粮食，按需点餐～',
    '当天菜品，现买现做，拒绝预制菜',
  ]
  const [categoryIndex, setCategoryIndex] = useState(0); // 当前品类

  const handleCategoryChange = (categoryIndex) => {
    setCategoryIndex(categoryIndex);
  }

  return (
      <View className='menu-container'>
        <SearchBar className='search-container' shape="round" maxLength={5} />
        <Delivery/>
        <NoticeBar
              className='notice-container'
              direction="vertical"
              list={noticeList}
              speed={10}
              duration={2000}
            />
        <View className='product-list-container'>
          <ProductCategory categorys={categorys} currentCategoryIndex={categoryIndex} onChangeCategory={handleCategoryChange}/>
          <ProductList key={categoryIndex} categorys={categorys} currentCategoryIndex={categoryIndex}/>
        </View>
        <View style={{position:'fixed',bottom:0}}>
            <Cart/>
        </View>
      </View>
  )
}

export default Menu

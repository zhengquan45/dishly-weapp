
import './index.scss'
import { SearchBar, NoticeBar } from '@nutui/nutui-react-taro'
import { View }from '@tarojs/components'
import Delivery from './delivery'
import ProductList from './product-list'


function Order() {
  const categorys = ['午餐','晚餐','热销', '新品', '主食', '小吃', '饮料', '甜品', '水果', '零食', '其他', '全部']
  const noticeList = [
    '加入粉丝群，呼叫客服💁可领取新人券',
    '在忙也要记得按时吃饭哦🍚',
    '珍惜粮食，按需点餐～',
    '当天菜品，现买现做，拒绝预制菜',
  ]

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
        <ProductList categorys={categorys}/>
      </View>
  )
}

export default Order

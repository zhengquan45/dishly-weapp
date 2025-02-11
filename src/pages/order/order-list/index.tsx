import './index.scss'
import { View } from '@tarojs/components'
import { Price, Button} from '@nutui/nutui-react-taro'
import LoadMore from 'src/components/load-more'
import Empty from 'src/components/empty'

function OrderList({orders,hasNextPage}) {


  return (
    <View className='order-list'>
      {
            orders.length > 0 ?
            orders.map((_, index) => (
              <View key={index} className='order-item'>
              <View className='order-item-header'>
                <View className='order-item-status'>已完成</View>
                <View className='order-item-date'>11/10 15:16 周五</View>
              </View>
              <View className='order-item-body'>
                <View className='order-item-product'>
                  <View className='order-item-product-img'>
                    <img src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                  </View>
                  <View className='order-item-product-img'>
                    <img src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                  </View>
                  <View className='order-item-product-img'>
                    <img src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                  </View>
                  <View className='order-item-product-img'>
                    <img src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                  </View>
                </View>
                <View className='order-item-summary'>
                  <View>
                  共 1 件 
                  <Price style={{color:'#000'}} price={36} size="large" thousands />
                  </View>
                </View>
              </View>
              <View className='order-item-operate'>
                  <View>
                    <Button type="primary">再来一单</Button>
                  </View>
                </View>
              </View>
            ))
            :
            <Empty children='您没有相关订单～'/>
          }
          <LoadMore hasNextPage={hasNextPage}/>
      </View>
  
  )
}

export default OrderList

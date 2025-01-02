import './index.scss'
import { View } from '@tarojs/components'
import { Button,Price } from '@nutui/nutui-react-taro'
import { ArrowRight } from '@nutui/icons-react-taro'
import moment from 'moment'

function CardItem({cardOrderItem}:{cardOrderItem:CardOrderItemProps}) {
 

  return (
      <>
        <View className='card-order-item'>
          <View className='card-order-item-header'>
            <View className='card-order-item-status-box'>
              <View className='card-order-item-status'>{cardOrderItem.status}</View>
              <View className='card-order-item-date'>{moment(cardOrderItem.payTime).format('yyyy/MM/DD HH:mm')}</View>
            </View>
            <View className='card-order-item-detail'>
              <ArrowRight/>
            </View>
          </View>
          <View className='card-order-item-body'>
          <View className='card-order-item-info-box'>
            <View className='card-order-item-image'>
              <img src={cardOrderItem.image} />
            </View>
            <View className='card-order-item-info'>
              <View className='card-order-item-title'>{cardOrderItem.name}</View>
              <View className='card-order-item-price'>面额：￥{cardOrderItem.price}</View>
            </View>
            </View>
            <View className='card-order-item-summary'>
              共 2 件 实付：<Price style={{color:'#000'}} price={70} size="large" thousands />
            </View>
          </View>
          <View className='card-order-item-operate'>
              <Button type="primary" size='mini'>再来一单</Button>
          </View>
        </View>
      </>
  )
}

export default CardItem

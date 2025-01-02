import './index.scss'
import { View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import { Page } from '../../../constants/const'


function CardItem({cardItem,onActiveTabChange}) {
 

  return (
      <>
        <View className='card-item'>
          <View className='card-item-body'>
          <View className='card-item-image'>
            <img src={cardItem.image} />
          </View>
          <View className='card-item-info'>
            <View className='card-item-title'>{cardItem.name}</View>
            <View className='card-item-subtitle'>卡号：{cardItem.cardNo} <Button size='mini'>复制</Button></View>
            <View className='card-item-price'>面额：￥{cardItem.price}</View>
            <View className='card-item-remain-count'>剩余次数：{cardItem.remainCount}</View>
          </View>
          </View>
          <View className='card-item-operate'>
            <Button type='primary' size='mini' onClick={()=>{
              onActiveTabChange(Page.CardUseRecord)
            }}>查看使用明细</Button>
          </View>
        </View>
      </>
  )
}

export default CardItem

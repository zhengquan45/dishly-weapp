import './index.scss'
import { View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'



function CardTemplateItem({cardItem,onClick}) {
 

  return (
      <>
         <View className='card-template-item' onClick={onClick}>
            <View className='card-template-item-image'>
              <img src={cardItem.image} alt="" />
            </View>
            <View className='card-template-item-name'>{cardItem.name}</View>
            <View className='card-template-item-info'>
              <View className='card-template-item-price'>
                <span>￥</span>
                {cardItem.price}
              </View>
              <View className='card-template-item-operate'>
                <Button type="primary" size='mini'>购买</Button>
              </View>
            </View>
         </View>
      </>
  )
}

export default CardTemplateItem

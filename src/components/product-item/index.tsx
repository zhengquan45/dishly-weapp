import { View } from '@tarojs/components'
import './index.scss'
import { Price } from '@nutui/nutui-react-taro'

function ProductItem({productItem, itemNum}) {
  return (
      <>
       <View className='product-item'>
              <View className='product-item-image'>
                <img src={productItem.imageUrl} />
              </View>
              <View className='product-item-info'>
                <View className='product-item-title'>{productItem.name}</View>
                <View className='product-item-subtitle'>{productItem.subName}</View>
                <View className='product-item-num'>{itemNum} 件</View>
                <View className='product-item-price-right'>
                  <Price style={{color:'#000'}} price={productItem.price} size="normal" thousands />
                </View>
              </View>
        </View>
      </>
  )
}

export default ProductItem

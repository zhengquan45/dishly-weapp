import { View } from '@tarojs/components'
import './index.scss'
import { IconFont } from '@nutui/icons-react-taro'
import { Price } from '@nutui/nutui-react-taro'
import plus from '@assets/images/plus.png'
import minus from '@assets/images/minus-line.png'

function ProductItem({productItem, itemNum, plusItem, minusItem}) {
  return (
      <>
       <View className='product-item'>
              <View className='product-item-image'>
                <img src={productItem.img} />
              </View>
              <View className='product-item-info'>
                <View className='product-item-title'>{productItem.name}</View>
                <View className='product-item-subtitle'>{productItem.subname}</View>
                <View className='product-item-price'>
                  <Price style={{color:'#000'}} price={productItem.price} size="normal" thousands />
                </View>
                <View style={{position: 'absolute',right:0,bottom: 0,display:'flex',alignItems:'center'}}>
                  <IconFont name={minus} size='20' onClick={()=>{
                      console.log(productItem,'点击了减号')
                      minusItem(productItem.id)
                  }}/>
                  <span style={{fontSize:20,margin:'0px 10px 5px 10px'}}>{itemNum}</span>
                  <IconFont name={plus} size='20'  onClick={()=>{
                      console.log(productItem,'点击了加号')
                      plusItem(productItem.id)
                  }}/>
                </View>
               
              </View>
        </View>
      </>
  )
}

export default ProductItem

import { useState } from 'react';
import { View }from '@tarojs/components'
import './index.scss'
import SplitOrder from './split-order';
import { IconFont } from '@nutui/icons-react-taro'
import plus from '@assets/images/plus.png'



function ProductList({categorys}) {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const productCategoryItemClass = (index) => {
    return `product-category-item ${categoryIndex === index ? 'product-category-item-active' : ''}`
  }

  
  return (
      <>
        <View className='product-list-container'>
          <View className='product-category-list'>
            {categorys.map((category,index) => (
                <View key={index} className={productCategoryItemClass(index)} onClick={()=>{
                  console.log('点击了',index)
                  setCategoryIndex(index)
                }}>
                  <View className='product-category-name'>
                    {category}
                  </View>
                </View>
            ))}
          </View>
          <View className='product-item-list'>
            <View className='product-item-list-body'>
            {categoryIndex == 0? <SplitOrder/>:''}
            <View className='product-item'>
              <View className='product-item-image'>
                <img src='https://img.yzcdn.cn/vant/apple-1.jpg' />
              </View>
              <View className='product-item-info'>
                <View className='product-item-title'>福气满满套餐</View>
                <View className='product-item-subtitle'>满12抽行李箱</View>
                <View className='product-item-price'>￥5.00</View>
                <IconFont name={plus} size='20' style={{position: 'absolute',right:0,bottom: 0,color:'red'}} onClick={()=>{
                  console.log('点击了加号')
                }}/>
              </View>
            </View>
            </View>
          </View>
        </View>
      </>
  )
}

export default ProductList

import { useState } from 'react';
import { View }from '@tarojs/components'
import './index.scss'
import SplitOrder from './split-order'
import ProductItem from '../product-item'
import { useSelector } from "react-redux";

interface RootState {
  items: Item[];
}

function ProductList({categorys, products}) {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const productCategoryItemClass = (index) => {
    return `product-category-item ${categoryIndex === index ? 'product-category-item-active' : ''}`
  }
  const items = useSelector((state: RootState) => state.items); // 获取 items 状态

  const getItemsNum = (id) => {
    const item = items.find((item) => item.id === id);
    return item ? item.num : 0;
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
            {products.map((product, index) => (
                <ProductItem key={index} productItem={product} itemNum={getItemsNum(product.id)}/>
            ))}
            </View>
          </View>
        </View>
      </>
  )
}

export default ProductList

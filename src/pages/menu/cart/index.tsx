import { View} from '@tarojs/components'
import './index.scss'
import { Button, Price } from '@nutui/nutui-react-taro'
import { useState } from "react";
import ProductItem from '../product-item';
import { Page } from 'src/constants/const';


function Cart({onActiveTabChange, products, items, plusItem, minusItem, clearItems}) {
  
  const [ cartSelectProductShow , setCartSelectProductShow ] = useState(false);
  

  const cartContainerClass = () => {
    return `cart-container ${items.length > 0 ? '' : 'cart-container-hidden'}`
  }

  const cartSelectProductContainerClass = () => {
    return `cart-select-product-container ${items.length > 0 && cartSelectProductShow ? '' : 'cart-select-product-container-hidden'}`
  }

  const cartMaskClass = () => {
    return `cart-mask ${items.length > 0 && cartSelectProductShow ? '' : 'cart-mask-hidden'}`
  }

  const getProduct = (id) => {
    return products.find((product) => product.id === id);
  }  

  const totalPrice = () => {
    return items.reduce((total, item) => {
      const product = getProduct(item.id);
      return total + product.price * item.num;
    }, 0);
  }


  return (
      <>
        <View className={cartMaskClass()} onClick={()=>{
          setCartSelectProductShow(false)
        }}></View>
        <View className={cartSelectProductContainerClass()}>
            <View className='cart-select-product-header'>
              <View className='cart-select-product-title'>已选商品</View>
              <View className='cart-select-product-clear' onClick={clearItems}>清空</View>
            </View>
            <View className='cart-select-product-body'>
              {items.map((item,index)=>(
                <ProductItem key={index} productItem={getProduct(item.id)} itemNum={item.num} plusItem={plusItem} minusItem={minusItem}/>
              ))}
            </View>
        </View>
        <View className={cartContainerClass()}>
          <View className='cart-product-num' onClick={()=>{
            setCartSelectProductShow(!cartSelectProductShow)
          }}>购物车 {items.length} 件</View>
          <View className='cart-product-operate'>
            <Button type="primary" onClick={()=>{
              onActiveTabChange(Page.Checkout)
            }}>去结算</Button>
            <View className='cart-product-price'>合计 
              <Price style={{color:'#000'}} price={totalPrice()} size="large" thousands />
            </View>
          </View>
        </View>
      </>
  )
}

export default Cart

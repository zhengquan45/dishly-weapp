import { View} from '@tarojs/components'
import './index.scss'
import { Button, Price } from '@nutui/nutui-react-taro'
import { Trash } from '@nutui/icons-react-taro'
import { useState } from "react";
import ProductItem from '../product-item';

import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "src/actions/items";
import { RootState } from 'src/reducers';
import Taro from '@tarojs/taro';
import foodTary from 'src/assets/images/food-tray.png';


function Cart() {
  
  const [ cartSelectProductShow , setCartSelectProductShow ] = useState(false);
  
  const items = useSelector((state: RootState) => state.items); // 获取 items 状态

  const dispatch = useDispatch();

  const cartContainerClass = () => {
    return `cart-container ${items.length > 0 ? '' : 'cart-container-hidden'}`
  }

  const cartSelectProductContainerClass = () => {
    return `cart-select-product-container ${items.length > 0 && cartSelectProductShow ? '' : 'cart-select-product-container-hidden'}`
  }

  const cartMaskClass = () => {
    return `cart-mask ${items.length > 0 && cartSelectProductShow ? '' : 'cart-mask-hidden'}`
  }

  const totalPrice = () => {
    return items.reduce((total, item) => {
      return total + item.productItem.price * item.num;
    }, 0);
  }


  return (
      <>
        <View className={cartMaskClass()} onClick={()=>{
          setCartSelectProductShow(false)
        }}></View>
        <View className={cartSelectProductContainerClass()}>
            <View className='cart-select-product-header'>
              <View className='cart-select-product-title'>已点套餐</View>
              <View className='cart-select-product-clear' onClick={()=>{
                dispatch(clearItems())
              }}><Trash/>清空</View>
            </View>
            <View className='cart-select-product-body'>
              {items.map((item,index)=>(
                <ProductItem key={index} productItem={item.productItem} itemNum={item.num} />
              ))}
            </View>
        </View>
        <View className={cartContainerClass()}>
          <View className='cart-product-num' onClick={()=>{
            setCartSelectProductShow(!cartSelectProductShow)
          }}>
            <img src={foodTary} />
            <span>{items.length}</span>
          </View>
          <View className='cart-product-operate'>
            <Button type="primary" onClick={()=>{
              Taro.navigateTo({
                url: '/pages/checkout/index'
              })
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

import './index.scss'
import { View } from '@tarojs/components'
import OrderList from './order-list'
import { useState } from 'react'

function Order() {

  const [tabbarIndex, setTabbarIndex] = useState(0)

  const [hasNextPage, setHasNextPage] = useState(false)

  const orderTabberItemClass = (index) => {
    return `order-tabbar-item ${tabbarIndex === index ? 'order-tabbar-item-active' : ''}`
  }

  return (
    <>
      <View className='order-container'>
        <View className='order-tabbar'>
          <View className={orderTabberItemClass(0)} onClick={()=>{
            setTabbarIndex(0)
          }}>全部</View>
          <View className={orderTabberItemClass(1)} onClick={()=>{
            setTabbarIndex(1)
          }}>历史</View>
          <View className={orderTabberItemClass(2)} onClick={()=>{
            setTabbarIndex(2)
          }}>退单</View>
        </View>
        <OrderList orders={Array.from({length:5})} hasNextPage={hasNextPage}/>
      </View>
    </>
  )
}

export default Order

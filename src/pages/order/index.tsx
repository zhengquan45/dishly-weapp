import './index.scss'
import { View } from '@tarojs/components'
import OrderList from './order-list'
import { useState } from 'react'
import Tarbar from 'src/components/tabs'
import CustomTabbar from 'src/components/custom-tab-bar';

function Order() {

  const [hasNextPage, setHasNextPage] = useState(false)

  return (
    <>
      <View className='order-container'>
        <Tarbar options={['全部','历史','退单']}/>
        <OrderList orders={Array.from({length:5})} hasNextPage={hasNextPage}/>
      </View>
    </>
  )
}

export default Order

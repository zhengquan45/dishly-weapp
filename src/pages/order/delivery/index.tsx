
import { View }from '@tarojs/components'
import { ArrowRight, Jdl, Location } from '@nutui/icons-react-taro'
import './index.scss'

function Delivery() {
  return (
      <>
         <View className='delivery-container'>
          <View className='delivery-item'>
            <Jdl className='delivery-address-prefix-icon'/>
            <View className='delivery-address-text'>
              PUPU 公司(光明港)
            </View>
            <ArrowRight className='delivery-address-arrow-right'/>
          </View>
          <View className='delivery-item'>
            <Location className='delivery-address-prefix-icon'/>
            <View className='delivery-address-subtext'>
              直线距离 256m
            </View>
          </View>
        </View>
      </>
  )
}

export default Delivery

import './index.scss'
import { View } from '@tarojs/components'
import { Edit } from '@nutui/icons-react-taro'
import { Button } from '@nutui/nutui-react-taro'
import homeAddr from 'src/assets/images/home-addr.png'
import Taro from '@tarojs/taro'

function CardUseRecord() {
 

  return (
      <>
        <View className='address-container'>
            <View className='address-title'>
              <img src={homeAddr}/>
              <span>我的地址</span>
            </View>
            <View className='address-body'>
            {
              Array.from({ length: 3 }).map((_, index) => (
              <View className="address-item" key={index}>
                <View className="address-item-body">
                  <View className="address-item-detail">
                    广东省深圳市南山区
                    <View className="address-item-tag">家</View>
                    <View className="address-item-label">常用</View>
                  </View>
                  <View className="address-item-street-num">8座206号</View>
                  <View className="address-item-user-info">张三 15659734336</View>
                </View>
                <View className="address-item-operate">
                  <Edit onClick={()=>{
                  Taro.navigateTo({
                    url: '/pages/address-form/index'
                  })
                }}/>
                </View>
              </View>
              ))
            }
            </View>
            <View className='address-footer'>
              <Button type="primary" block onClick={()=>{
                  Taro.navigateTo({
                    url: '/pages/address-form/index'
                  })
                }}>添加地址</Button>
            </View>
        </View>
      </>
  )
}

export default CardUseRecord


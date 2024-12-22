import { View } from '@tarojs/components'
import { Avatar } from '@nutui/nutui-react-taro'
import './index.scss'
import { Page } from 'src/constants/const'


function UserInfo({onActiveTabChange}) {
  
  return (
        <>
        {/* 用户信息区 */}
        <View className='vip-info-container'>
          <View className='vip-info-body'>
            <View className='vip-info-body-container'>
              <View className='vip-user-avatar'>
                <Avatar
                  size="50"
                  src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
                />
              </View>
              <View className='vip-user-info' onClick={()=>{
                onActiveTabChange(Page.Profile)
              }}>
                <View className='vip-user-nick'>Zhqqqq</View>
                <View className='vip-user-level'>
                    VIP 1
                </View>
              </View>
              <View className='vip-user-assert'>
              <View className='vip-user-assert-num'>0</View>
                <View className='vip-user-assert-text'>
                  余额
                </View>
              </View>
              <View className='vip-user-assert' onClick={()=>{
                onActiveTabChange(Page.Coupon)
              }}>
                <View className='vip-user-assert-num'>6</View>
                <View className='vip-user-assert-text'>
                  优惠券
                </View>
              </View>
            </View>
          </View>
          <View className='vip-info-bottom'>
            <View className='vip-info-bottom-title'>
              会员特权
            </View>
            <View className='vip-info-bottom-subtitle'>
              周四加料日,1元小料券
            </View>
            <View className='vip-info-bottom-arrow'>
              ➡️
            </View>
          </View>
        </View>
        </>
  )
}

export default UserInfo

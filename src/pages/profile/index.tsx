import { View } from '@tarojs/components'
import { Avatar } from '@nutui/nutui-react-taro'
import './index.scss'
import coupon from '@assets/images/coupon.png'
import cash from '@assets/images/cash.png'
import { Page } from '../../constants/const'
function Profile({onActiveTabChange}) {
  return (
      <View className='profile-container'>
         <View className='profile-header'>
          <View className='profile-header-avatar'>
              <Avatar
                size="large"
                src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
              />
           </View>
           <View className='profile-header-name'>Zhqqqq</View>
         </View>
         <View className='profile-assets'>
            <View className='profile-assets-item' onClick={()=>{
              onActiveTabChange(Page.Card)
            }}>
              <View className='profile-assets-item-body'>
                <View className='profile-assets-item-value'>
                  2
                </View>
                <View className='profile-assets-item-name'>
                  订阅卡
                </View>
              </View>
              <View className='profile-body-item-image'>
                <img src={cash}/>
              </View>
            </View>
            <View className='profile-assets-item' onClick={()=>{
              onActiveTabChange(Page.Coupon)
            }}>
              <View className='profile-assets-item-body'>
                <View className='profile-assets-item-value'>
                  7
                </View>
                <View className='profile-assets-item-name'>
                  优惠券
                </View>
              </View>
              <View className='profile-body-item-image'>
                <img src={coupon}/>
              </View>
            </View>
         </View>
         <View className='profile-service'>
            <View className='profile-service-title'>
               更多服务
            </View>
            <View className='profile-service-body'>
            <View className='profile-service-item' onClick={()=>{
              onActiveTabChange(Page.Order)
            }}>
              <View className='profile-service-item-icon'>
              </View>
              <View className='profile-service-item-info'>
                我的订单
              </View>
            </View>
            <View className='profile-service-item' onClick={()=>{
              onActiveTabChange(Page.CardShop)
            }}>
              <View className='profile-service-item-icon'>
              </View>
              <View className='profile-service-item-info'>
                购买订阅卡
              </View>
            </View>
            <View className='profile-service-item' onClick={()=>{
              onActiveTabChange(Page.RedeemMeituan)
            }}>
              <View className='profile-service-item-icon'>
              </View>
              <View className='profile-service-item-info'>
                美团兑换
              </View>
            </View>
            <View className='profile-service-item' onClick={()=>{
              onActiveTabChange(Page.RedeemDouyin)
            }}>
              <View className='profile-service-item-icon'>
              </View>
              <View className='profile-service-item-info'>
                抖音兑换
              </View>
            </View>
            <View className='profile-service-item'>
              <View className='profile-service-item-icon'>
              </View>
              <View className='profile-service-item-info'>
                福利群
              </View>
            </View>
            <View className='profile-service-item'>
              <View className='profile-service-item-icon'>
                
              </View>
              <View className='profile-service-item-info'>
                问题反馈
              </View>
            </View>
            <View className='profile-service-item'>
              <View className='profile-service-item-icon'>
              </View>
              <View className='profile-service-item-info'>
                关于我们
              </View>
            </View>
            </View>
         </View>
      </View>
  )
}

export default Profile

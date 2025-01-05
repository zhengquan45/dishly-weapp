import { View } from '@tarojs/components'
import { Avatar } from '@nutui/nutui-react-taro'
import './index.scss'
import coupon from '@assets/images/discount-voucher.png'
import cardWallet from '@assets/images/wallet.png'
import customerService from '@assets/images/customer-service.png'
import credit from '@assets/images/credit-card.png'
import order from '@assets/images/receipt.png'
import scanner from '@assets/images/scanner.png'
import we from '@assets/images/worldwide.png'
import christmasDecoration from '@assets/images/christmas-decoration.png'
import { Page } from '../../constants/const'
function Profile({onActiveTabChange}) {
  return (
      <View className='profile-container'>
         <View className='profile-header'>
          <View className='profile-header-avatar' onClick={()=>{
            onActiveTabChange(Page.ProfileEdit)
          }}>
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
                <img src={cardWallet}/>
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
                <img src={order}/>
              </View>
              <View className='profile-service-item-info'>
                我的订单
              </View>
            </View>
            <View className='profile-service-item' onClick={()=>{
              onActiveTabChange(Page.CardShop)
            }}>
              <View className='profile-service-item-icon'>
                <img src={credit}/>
              </View>
              <View className='profile-service-item-info'>
                购买订阅卡
              </View>
            </View>
            <View className='profile-service-item' onClick={()=>{
              onActiveTabChange(Page.Redeem)
            }}>
              <View className='profile-service-item-icon'>
                <img src={scanner}/>
              </View>
              <View className='profile-service-item-info'>
                团购兑换
              </View>
            </View>
            <View className='profile-service-item'>
              <View className='profile-service-item-icon'>
              <img src={christmasDecoration}/>
              </View>
              <View className='profile-service-item-info'>
                福利群
              </View>
            </View>
            <View className='profile-service-item'>
              <View className='profile-service-item-icon'>
                <img src={customerService}/>
              </View>
              <View className='profile-service-item-info'>
                问题反馈
              </View>
            </View>
            <View className='profile-service-item'>
              <View className='profile-service-item-icon'>
                <img src={we}/>
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

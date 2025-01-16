import { View } from '@tarojs/components'
import { Avatar, Button } from '@nutui/nutui-react-taro'
import './index.scss'
import Taro, { useDidShow } from '@tarojs/taro'
import { useState } from 'react'
import  request  from 'src/utils/request'

function UserInfo() {
  
  // const mainNoticeText = '被食物治愈的一天!!'

  const [userInfo, setUserInfo] = useState<any>(null);


  const isTokenMissing = () => {
    const token = Taro.getStorageSync('token');
    return !token || token === '';
  };

   // 获取当前用户数据
   const fetchCurrentUser = async () => {
    try {
      const data = await request({
        url: '/api/wechat/currentUser',
        method: 'GET',
      });
      setUserInfo(data)
    } catch (error) {
      console.error('获取当前用户数据失败:', error);
      // 清除 token
      Taro.removeStorageSync('token');
      Taro.removeStorageSync('userInfo');
    }
  };

  useDidShow(() => {
    // 加载当前用户数据
    fetchCurrentUser();
  })
  

  return (

        <>
        {/* 用户信息区 */}
        <View className='vip-info-container'>
          <View className='vip-info-body'>
            {/* 用户信息 */}
            {!isTokenMissing()?
            (
                <View className='vip-info-body-container'>
                <View className='vip-user-avatar'>
                  <Avatar
                    size="50"
                    src={userInfo?.avatarUrl}
                  />
                </View>
                <View className='vip-user-info' onClick={()=>{
                  Taro.navigateTo({
                    url: `/pages/profile/index`
                  })
                }}>
                  <View className='vip-user-nick'>{userInfo?.nickname}</View>
                  <View className='vip-user-level'>
                      VIP 1
                  </View>
                </View>
                <View className='vip-user-assert' onClick={()=>{
                 Taro.navigateTo({
                  url: `/pages/card/index`
                })
                }}>
                   <span>剩余20次</span>
                <View className='vip-user-assert-num'>5</View>
                  <View className='vip-user-assert-text'>
                    订阅卡
                  </View>
                </View>
                <View className='vip-user-assert' onClick={()=>{
                  Taro.navigateTo({
                    url: `/pages/coupon/index`
                  })
                }}>
                  <View className='vip-user-assert-num'>6</View>
                  <View className='vip-user-assert-text'>
                    优惠券
                  </View>
                </View>
              </View>
            ):
            (
              <View className='vip-info-body-container'>
              <View className='vip-user-avatar'>
                <Avatar
                  size="50"
                  src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
                />
              </View>
              <View className='vip-user-info'>
                <View className='vip-user-nick'>尊敬的用户</View>
                <View className='vip-user-auth-desc'>
                    登录领取新人礼包
                </View>
              </View>
              <View className='vip-user-auth'>
                <Button type='primary' onClick={()=>{
                  Taro.navigateTo({
                    url: `/pages/auth/index`
                  })
                }}>
                  授权登录
                </Button>
              </View>
              </View>
            )
          }
          </View>
         
          {/* <View className='vip-info-bottom'>
            <NoticeBar content={mainNoticeText} />
          </View> */}
        </View>
        </>
  )
}

export default UserInfo

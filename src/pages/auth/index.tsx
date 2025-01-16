import './index.scss'
import { View } from '@tarojs/components'
import { Avatar, Button, Checkbox } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import { SHOPNAME } from 'src/constants/const'
import request from 'src/utils/request'
function Auth() {
 
  const [agreeContract,setAgreeContract] = useState(false)

  const handleGetPhoneNumber = async (e) => {
    const { encryptedData, iv } = e.detail;
    if (!encryptedData || !iv) {
      Taro.showToast({
        title: '手机号授权失败，请重试',
        icon: 'none'
      })
      return
    }
    try {
      const loginRes = await Taro.login();
      const code = loginRes.code;
      if (!code) {
        Taro.showToast({
          title: '登录失败，请稍后重试',
          icon: 'none',
        });
        return
      }

      const userInfoRes = await Taro.getUserInfo();
      const userInfo = userInfoRes.userInfo;
      if (!userInfo) {
        Taro.showToast({
          title: '获取用户信息失败，请稍后重试',
          icon: 'none',
        });
        return
      }

      request({
        url: '/api/wechat/login',
        method: 'POST',
        data: {
          code,
          encryptedData,
          iv,
          userInfo
        },
        onSuccess: (data) => {
          console.log('登录成功！',data)
          Taro.setStorageSync('token',data.tokenValue)
          Taro.navigateBack()
        }
      })
    }catch (err) {
      console.error('登录失败:', err);
      Taro.showToast({
        title: '登录失败，请稍后重试',
        icon: 'none',
      });
    }
  }

  return (
      <>
        <View className='auth-container'>
            <View className='auth-avatar-container'>
                <Avatar
                  size="80"
                  src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
                />
                <View className='auth-avatar-title'>{SHOPNAME}</View>
            </View>
            <View className='auth-info-desc'>成为会员立享更多优惠福利</View>
            <View className='auth-operate'>
              <View className='auth-operate-desc'>授权绑定手机号 为您提供更好的服务</View>
              {
                agreeContract ? 
                (
                  <Button open-type="getPhoneNumber" onGetPhoneNumber={handleGetPhoneNumber} type="primary" block size="large">手机号一键登录</Button>
                ):
                (
                  <Button type="primary" block size="large" onClick={()=>{
                    Taro.showToast({
                      title: '请先同意用户协议和隐私政策',
                      icon: 'none'
                    })
                  }}>手机号一键登录</Button>
                )             
              }          
              <View className='auth-operate-check'>
                <Checkbox checked={agreeContract}
                  onChange={checked => setAgreeContract(checked)}>已阅读并同意《用户协议》《隐私政策》</Checkbox>
              </View>  
            </View>
            <View className='auth-nologin'>
              <Button fill="none" size='normal' onClick={()=> Taro.navigateBack()}>暂不登录</Button>
            </View>
        </View>
      </>
  )
}

export default Auth


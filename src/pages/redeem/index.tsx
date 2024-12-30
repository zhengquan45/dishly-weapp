import { View } from '@tarojs/components'
import { Page } from '../../constants/const'
import { NavBar, Button, Input, Avatar } from '@nutui/nutui-react-taro'
import { ArrowLeft } from '@nutui/icons-react-taro'
import './index.scss'
import { RedeemPlatform } from '../../constants/const'
import { useState } from 'react'
function Redeem({onActiveTabChange,redeemPlatform = RedeemPlatform.Meituan}) {
  const [redeemCode, setRedeemCode] = useState('');

  return (
      <View className='redeem-container'> 
         <NavBar style={{background: 'transparent',height: '60px',color: '#fff'}}
            titleAlign="center"
            back={
              <>
                <ArrowLeft size={14} />
              </>
            }
            onBackClick={() => onActiveTabChange(Page.Main)}
          >
          <span style={{color: '#fff'}}>团购核销</span>
          </NavBar>
          <View className='redeem-body'>
              <View className='redeem-logo'>
                {
                  redeemPlatform === RedeemPlatform.Meituan ?
                  (
                  <Avatar.Group max="3" level="right" size="large">
                    <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
                    <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
                  </Avatar.Group>
                  )
                  :
                  (
                  <Avatar.Group max="3" level="right" size="large">
                    <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
                  </Avatar.Group>
                  )
                }
             
              </View>
              <View className='redeem-title'>平台团购套餐自助验券</View>
              <Input className='redeem-input'
                          placeholder="输入卡券兑换码"
                          maxLength={16}
                          onChange={(value) => {
                            setRedeemCode(value)
                          }}
                  />
                <Button 
                  className='redeem-btn'
                  block
                  type="primary"
                  onClick={() => {
                    console.log('redeemPlatform',redeemPlatform)
                    console.log('redeemCode',redeemCode)
                  }}
                >兑换</Button>
               <View className='redeem-tip'>
                  <View className='redeem-tip-title'>温馨提示</View>
                  <View className='redeem-tip-content'>
                    <View>1. 团购券核销兑换：请先前往对应APP-团购订单详情页，复制券码，再回到小程序提交验券；</View>
                    <View>2. 验券成功后将无法退款，若出现无法使用的情况，请在上班时间联系客服</View>
                  </View>
               </View>
          </View>
      </View>
  )
}

export default Redeem

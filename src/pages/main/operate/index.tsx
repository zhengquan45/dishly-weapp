import { View } from '@tarojs/components'
import { ActionSheet , ActionSheetOption } from '@nutui/nutui-react-taro'
import './index.scss'
import { useState } from "react";
import Taro from "@tarojs/taro";
import { Page } from 'src/constants/const';
import sukiyaki from 'src/assets/images/sukiyaki.png'
import qrCode from '@/assets/images/qr-code.png'
import customerService from '@/assets/images/customer-service.png'


function Operate() {
  const [contractVisible, setContractVisible] = useState(false)
  const contractOptions = [
    {
      name: '在线客服',
    },
    {
      name: '商家电话',
    }
  ];
  const handleSelectContract = (item: ActionSheetOption<string | boolean>)=>{
    switch(item.name){
      case '在线客服':
       break;
      case '商家电话':
        Taro.makePhoneCall({
          phoneNumber: '15659734336', // 目标电话号码
        });
    }
    setContractVisible(false)
  }
  return (
        <>
        {/* 操作区 */}
        <View className='vip-operate'>
          <View className='vip-operate-order operate-button' onClick={() => {
            Taro.navigateTo({
              url: `/pages/index/index?activeTab=${Page.Menu}`
            })
          }}>
            <View className='vip-operate-order-image'>
              <img src={sukiyaki}/>
            </View>
            <View className='vip-operate-order-text'>预定套餐</View>
          </View>
          <View className='vip-operate-other'>
            <View className='vip-operate-other-item operate-button'
            onClick={() => {
              Taro.navigateTo({
                url: `/pages/redeem/index`
              })
            }}>
              <View className='vip-operate-other-item-image'>
                <img src={qrCode}/>
              </View>
              团购核销
            </View>
            <View className='vip-operate-other-item operate-button'
            onClick={() => {
              setContractVisible(true)
            }}>
               <View className='vip-operate-other-item-image'>
                <img src={customerService}/>
              </View>
              联系商家
            </View>
          </View>
        </View>
        <ActionSheet
          title="联系商家"
          visible={contractVisible}
          options={contractOptions}
          onSelect={handleSelectContract}
          onCancel={() => setContractVisible(false)}
          cancelText="取消"
        />
        </>
  )
}

export default Operate

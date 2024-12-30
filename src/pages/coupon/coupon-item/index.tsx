import './index.scss'
import { View } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import moment from 'moment'
import { useState } from 'react'
import { TriangleUp,TriangleDown } from '@nutui/icons-react-taro'
import { Page } from 'src/constants/const'

function CouponItem({couponItem, onActiveTabChange,showDetail=false}) {

  const [expanded, setExpanded] = useState(false);

  const couponItemDetailClass = () => {
    return `coupon-item-detail ${expanded ? '' : 'coupon-item-detail-hidden'}`
  }

  return (
      <>
        <View className='coupon-item-container'> 
          <View className='coupon-item-header'>
            <View className='coupon-item-line'></View>
            <View className='coupon-item-discount'>
              {
                couponItem.discount ?
                (
                    <>
                    <span>￥</span>
                    {couponItem.discount}
                    </>
                )
                :''
              }
            </View>
            <View className='coupon-item-limit'>满 {couponItem.limit} 可用</View>
          </View>
          <View className='coupon-item-body'>
            <View className='coupon-item-body-info'>
            <View className='coupon-item-title'>{couponItem.title}</View>
            {
              moment(couponItem.expireDate).isSame(moment(), 'day') ? 
              (<View className='coupon-item-expire-date coupon-item-expire-date-current'>
              今天23:59到期
              </View> 
              ):
              (
              <View className='coupon-item-expire-date'>
              有效期至 {moment(couponItem.expireDate).format('yyyy/MM/DD HH:mm')}
              </View>
              )  
            }
            </View>
            <View className='coupon-item-body-operate'>
                <Button 
                  type="primary"
                  onClick={() => {
                    onActiveTabChange(Page.Menu)
                  }}
                >去使用</Button>
            </View>
            {
              showDetail &&
              <View className='coupon-item-toggle'  onClick={() => {
                setExpanded(!expanded)
              }}>
              {expanded ? <TriangleUp/> : <TriangleDown/>}
              </View>
            }
          </View>
        </View>
        {showDetail &&
          <View className={couponItemDetailClass()}> 
          <View className='coupon-item-detail-content'>
          <View>领取时间: {moment(couponItem.claimDate).format('yyyy-MM-DD HH:mm:ss')}</View>
          <View>编号: {couponItem.serialNo}</View>
          <View>1. 本券仅限在线支付时使用，不找零，不兑现。</View>
          <View>2. 本券不可与其他优惠券同时使用。</View>
          <View>3. 本券不可兑换现金，不可转让。</View>
          <View>4. 本券最终解释权归商家所有。</View>
        </View>
        </View>
        }
        
      </>
  )
}

export default CouponItem

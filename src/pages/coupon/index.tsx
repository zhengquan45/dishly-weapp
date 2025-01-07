import './index.scss'
import { View } from '@tarojs/components'
import { NavBar } from '@nutui/nutui-react-taro'
import { ArrowLeft } from '@nutui/icons-react-taro'
import TarBar from 'src/components/tabs'
import CouponItem from './coupon-item'
import LoadMore from 'src/components/load-more'
import Empty from 'src/components/empty'
import { useState } from 'react'
import Taro from '@tarojs/taro'

function Coupon() {
  const [hasNextPage, setHasNextPage] = useState(false)

  const coupons:CouponItemProps[] = [
    {
      discount: 25,
      limit: 100,
      title: "卤制品满减券",
      expireDate: 1735189354000,
      claimDate: 1734843754000,
      serialNo:'h8cft8s01su1'
    },
    {
      discount: 25,
      limit: 100,
      title: "实惠卡惊喜券",
      expireDate: 1734843754000,
      claimDate: 1734843754000,
      serialNo:'h8cft8s01su1'
    }
  ];

  return (
      <>
        <View className='coupon-container'> 
         <NavBar style={{background: '#fff',height: '60px',marginBottom: '0'}}
            titleAlign="center"
            back={
              <>
                <ArrowLeft size={14} />
              </>
            }
            onBackClick={() => 
              Taro.navigateBack()
            }
          >
          <span>我的优惠券</span>
          </NavBar>
          <TarBar options={['全部','满减券','兑换券','配送券']}/>
          <View className='coupon-list-container'>
            {
              coupons.length > 0 ?
              coupons.map((couponItem:CouponItemProps) => {
                return <CouponItem couponItem={couponItem}/>
              })
              :
              <Empty children='您没有相关优惠券～'/>
            }
             <LoadMore hasNextPage={hasNextPage}/>
          </View>
         
          </View>
      </>
  )
}

export default Coupon

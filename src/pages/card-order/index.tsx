import './index.scss'
import { View } from '@tarojs/components'
import { ArrowLeft } from '@nutui/icons-react-taro'
import { NavBar } from '@nutui/nutui-react-taro'
import { Page } from '../../constants/const'
import CardOrderItem from './card-order-item'
import Empty from 'src/components/empty'
import LoadMore from 'src/components/load-more'
import { useState } from 'react'

function CardList({onActiveTabChange}) {

  const [hasNextPage, setHasNextPage] = useState(true)
 
  const cardOrderItems:CardOrderItemProps[]= [
    {
      "id": 1,
      "name": "1次试餐卡",
      "image": "https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png",
      "price": 35,
      "status": "已完成",
      "orderNo": "ORD86256",
      "createTime": "2023-01-26 21:43:15",
      "payTime": "2023-07-14 15:36:43",
      "paymethod": "微信支付"
    },
    {
      "id": 2,
      "name": "5次快乐午餐周卡",
      "image": "https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png",
      "price": 168,
      "status": "已完成",
      "orderNo": "ORD51630",
      "createTime": "2023-11-23 08:13:07",
      "payTime": "2023-12-27 17:27:38",
      "paymethod": "微信支付"
    },
    {
      "id": 3,
      "name": "10次快乐周卡",
      "image": "https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png",
      "price": 328,
      "status": "已完成",
      "orderNo": "ORD67657",
      "createTime": "2023-03-28 09:55:48",
      "payTime": "2023-12-12 12:38:44",
      "paymethod": "微信支付"
    },
    {
      "id": 4,
      "name": "20次幸福午餐月卡",
      "image": "https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png",
      "price": 658,
      "status": "已取消",
      "orderNo": "ORD86632",
      "createTime": "2023-07-13 04:29:37",
      "payTime": "2023-12-10 07:29:56",
      "paymethod": "微信支付"
    },
    {
      "id": 5,
      "name": "40次幸福月卡",
      "image": "https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png",
      "price": 1188,
      "status": "已完成",
      "orderNo": "ORD48249",
      "createTime": "2023-11-28 19:54:49",
      "payTime": "2023-08-26 14:30:00",
      "paymethod": "微信支付"
    }
  ]  
  

  return (
      <>
        <View className='card-order-list-container'>
          <NavBar style={{background: '#fff',height: '60px',marginBottom: '0'}}
            titleAlign="center"
            back={
              <>
                <ArrowLeft size={14} />
              </>
            }
            onBackClick={() => onActiveTabChange(Page.Main)}
          >
          <span>我的订阅卡订单</span>
          </NavBar>
          <View className='card-order-list-body'>
             {cardOrderItems.length > 0 ?
               <>
                {
                cardOrderItems.map((cardOrderItem,index)=>(
                  <CardOrderItem key={index} cardOrderItem={cardOrderItem}/>
                ))
                }
                <LoadMore hasNextPage={hasNextPage}/>
              </>
              :
              <Empty children='暂无订单'/>
            }
          </View>
        </View>
      </>
  )
}

export default CardList

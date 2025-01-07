import './index.scss'
import { View } from '@tarojs/components'
import  Barrage from 'src/components/barrage'
import { ArrowRight, ArrowLeft } from '@nutui/icons-react-taro'
import { NavBar, Button, Price } from '@nutui/nutui-react-taro'
import { Page } from 'src/constants/const'
import CardTemplateItem from './card-template-item'
import Empty from 'src/components/empty'
import { useState } from 'react'
import Taro from '@tarojs/taro'

function Card() {

  const [hasNextPage, setHasNextPage] = useState(false)

  const [items, setItems] = useState<Item[]>([]);
 
  const cards:CardItemTemplateProps[] = [
    {
      id: 1,
      name: '1次试餐卡',
      price: 35,
      image: 'https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png'
    },
    {
      id: 2,
      name: '5次快乐午餐周卡',
      price: 168,
      image: 'https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png'
    },
    {
      id: 3,
      name: '10次快乐周卡',
      price: 328,
      image: 'https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png'
    },
    {
      id: 4,
      name: '20次幸福午餐月卡',
      price: 658,
      image: 'https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png'
    },
    {
      id: 5,
      name: '40次幸福月卡',
      price: 1188,
      image: 'https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png'
    }
  ]

  return (
      <>
        <View className='card-shop-container'>
          <NavBar style={{background: 'transparent',height: '60px',color: '#fff', marginBottom: '0'}}
            titleAlign="center"
            back={
              <>
                <ArrowLeft size={14} />
              </>
            }
            onBackClick={() => Taro.navigateBack()}
          >
          <span style={{color: '#fff'}}>订阅卡商城</span>
          </NavBar>
          <Barrage/>
          <View className='card-shop-body'>
            <View className='card-shop-header'>
              <View className='card-shop-title-box'>
                <View className='card-shop-header-title'>订阅卡</View>
                <View className='card-shop-header-subtitle'>充值即到账</View>
              </View>
            </View>
            <View className='card-shop-body'>
              {
                cards.length > 0 ?
                cards.map((cardItem,index) => {
                  return <CardTemplateItem key={index} cardItem={cardItem} onClick={()=>{
                    Taro.navigateTo({
                      url: `/pages/main/index`
                    })
                  }}/>
                })
                :
                <Empty children='暂无订阅卡上架～'/>
              }
            </View>
          </View>
          <View className='card-shop-operate'>
              <View className='card-shop-payment'>
                总计: <Price style={{color:'#000'}} price={35} size="large" thousands /> （{items.length}张）
              </View>
            <Button type="primary" onClick={()=>{
              console.log('确认支付')
            }}>确认支付</Button>
          </View> 
        </View>
      </>
  )
}

export default Card

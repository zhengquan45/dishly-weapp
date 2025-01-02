import './index.scss'
import { View } from '@tarojs/components'
import { ArrowRight, ArrowLeft } from '@nutui/icons-react-taro'
import CardItem from './card-item'
import { Button, NavBar } from '@nutui/nutui-react-taro'
import { Page } from 'src/constants/const'
import LoadMore from 'src/components/load-more'
import Empty from 'src/components/empty'
import { useState } from 'react'


function Card({onActiveTabChange}) {
  const [hasNextPage, setHasNextPage] = useState(false)

  const cards:CardItemProps[] = [
    {
      id: 1,
      name: '1次试餐卡',
      cardNo: 'h8cft8s01su1',
      price: 35,
      image: 'https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png',
      remainCount:1
    },
    {
      id: 2,
      name: '5次快乐午餐周卡',
      cardNo: 'h8cft8s01su1',
      price: 168,
      image: 'https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png',
      remainCount:2
    },
    {
      id: 3,
      name: '10次快乐周卡',
      cardNo: 'h8cft8s01su1',
      price: 328,
      image: 'https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png',
      remainCount:3
    },
    {
      id: 4,
      name: '20次幸福午餐月卡',
      cardNo: 'h8cft8s01su1',
      price: 658,
      image: 'https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png',
      remainCount:5
    },
    {
      id: 5,
      name: '40次幸福月卡',
      cardNo: 'h8cft8s01su1',
      price: 1188,
      image: 'https://s2.loli.net/2024/12/30/GPq2EoR8i5lusTQ.png',
      remainCount:40
    }
  ]

  const totalRemainCount = cards.reduce((total, card) => {
    return total + card.remainCount;
  },0);

  return (
      <>
        <View className='card-container'>
          <NavBar style={{background: 'transparent',height: '60px',color: '#fff', marginBottom: '0'}}
            titleAlign="center"
            back={
              <>
                <ArrowLeft size={14} />
              </>
            }
            onBackClick={() => onActiveTabChange(Page.Main)}
          >
          <span style={{color: '#fff'}}>订阅卡</span>
          </NavBar>
          <View className='card-info-container'>
            <View className='card-info-status'>待使用</View>
            <View className='card-info-body'>
              <View className='card-info-body-text'><span>{cards.length}</span> 张 | 剩余 {totalRemainCount} 次</View>
              <View className='card-info-body-operate'>
                <Button type="primary" onClick={()=>{
                  onActiveTabChange(Page.Menu)
                }}>去使用</Button>
              </View>
            </View>
            <View className='card-info-tag'
            onClick={()=>{
              onActiveTabChange(Page.CardOrder)
            }}
            >查看订阅卡订单
              <ArrowRight/>
            </View>
          </View>
          <View className='card-list-container'>
            <View className='card-list-title'>我的订阅卡</View>
            {
              cards.length > 0 ? (
                <>
                  {cards.map((card: CardItemProps) => (
                    <CardItem key={card.id} cardItem={card} onActiveTabChange={onActiveTabChange}/>
                  ))}
                  <LoadMore hasNextPage={hasNextPage} />
                </>
              ) : (
                <Empty children="您没有相应的订阅卡～" />
              )
            }
          </View>
        </View>
      </>
  )
}

export default Card

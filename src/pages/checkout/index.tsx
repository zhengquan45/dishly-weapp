import { useState } from 'react'
import './index.scss'
import { NavBar, Price, Divider, Button } from '@nutui/nutui-react-taro'
import { ArrowLeft } from '@nutui/icons-react-taro'
import { Page } from '../../constants/const'
import { View } from '@tarojs/components'
import Delivery from '../../components/delivery'
import ProductItem from 'src/components/product-item'

import { useSelector } from "react-redux";
import Taro from '@tarojs/taro'

interface RootState {
  items: Item[];
}

function Checkout() {
  const [expanded, setExpanded] = useState(false);
  const items = useSelector((state: RootState) => state.items); // 获取 items 状态

  const totalNum = items.reduce((total, item) => {
    return total + item.num;
  }, 0);

  const totalPrice = items.reduce((total, item) => {
    // 增加一个判断，查询商品是否存在、是否有效、是否变价
    return total + item.productItem.price * item.num;
  }, 0);


  return (
      <>
        <View className='checkout-container'>
          <NavBar style={{background: 'transparent',height: '60px',color: '#fff'}}
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
          <span style={{color: '#fff'}}>订单结算</span>
          </NavBar>
          
          <View className='checkout-delivery-container'>
            <Delivery/>
          </View> 
          <View className='checkout-order-container'>
            <View className='checkout-order-items'>
              {items.length > 2 && !expanded
              ? items.slice(0,2).map((item, index)=> (
                  <ProductItem key={index} productItem={item.productItem} itemNum={item.num}/>
                ))
                :
                items.map((item, index)=> (
                 <ProductItem key={index} productItem={item.productItem} itemNum={item.num}/>
                ))
              }
              { items.length > 2 && 
                 <View className='checkout-order-slide' onClick={()=>{
                    setExpanded(!expanded)
                 }}>
                  {expanded?
                    <span>收起更多</span>:
                    <span>展开全部</span>
                  }
                 </View>
              }
            </View>
            <Divider style={{ borderStyle: 'dashed' }}/>
            <View className='checkout-summary'>
              <View className='checkout-summary-total-price'>共 { totalNum } 件，合计 
                <Price style={{color:'#000'}}price={totalPrice} size="large" thousands />
              </View>
            </View> 
          </View>
          <View className='checkout-operate-container'>
            <View className='checkout-actual-payment'>
              实付: <Price style={{color:'#000'}} price={totalPrice} size="large" thousands />
            </View>
            <Button type="primary" onClick={()=>{
              console.log('确认支付')
            }}>确认支付</Button>
          </View> 
        </View>
      </>
  )
}

export default Checkout

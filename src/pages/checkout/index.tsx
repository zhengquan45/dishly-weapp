import { useState } from 'react'
import './index.scss'
import { NavBar, Price, Divider, Button } from '@nutui/nutui-react-taro'
import { ArrowLeft } from '@nutui/icons-react-taro'
import { Page } from '../../constants/const'
import { View } from '@tarojs/components'
import Delivery from '../../components/delivery'
import ProductItem from 'src/components/product-item'


function Checkout({onActiveTabChange, items}) {
  const [expanded, setExpanded] = useState(false);

  const products = [
    {
      id:1,
      name: '红烧肉',
      subname: '满12抽行李箱',
      price: 12,
      img: 'https://img.yzcdn.cn/vant/apple-1.jpg',
    },
    {
      id:2,
      name: '鱼香肉丝',
      subname:'芳香四溢',
      price: 10,
      img: 'https://img.yzcdn.cn/vant/apple-2.jpg',
    },
    {
      id:3,
      name: '宫保鸡丁',
      subname:'麻辣鲜香',
      price: 15,  
      img: 'https://img.yzcdn.cn/vant/apple-3.jpg',
    }];

  const totalNum = items.reduce((total, item) => {
    return total + item.num;
  }, 0);

  const getProduct = (id) => {
    const product = products.find((product) => product.id === id);
    console.log('product',product)
    return product;
  }  

  const totalPrice = () => {
    return items.reduce((total, item) => {
      const product = getProduct(item.id);
      if(product){
        return total + product.price * item.num;
      }
    }, 0);
  }

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
            onBackClick={() => onActiveTabChange(Page.Order)}
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
                  <ProductItem key={index} productItem={getProduct(item.id)} itemNum={item.num}/>
                ))
                :
                items.map((item, index)=> (
                 <ProductItem key={index} productItem={getProduct(item.id)} itemNum={item.num}/>
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
                <Price style={{color:'#000'}}price={totalPrice()} size="large" thousands />
              </View>
            </View> 
          </View>
          <View className='checkout-operate-container'>
            <View className='checkout-actual-payment'>
              实付: <Price style={{color:'#000'}} price={totalPrice()} size="large" thousands />
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

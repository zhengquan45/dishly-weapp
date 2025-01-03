import { View } from '@tarojs/components'
import { Tabbar } from '@nutui/nutui-react-taro'
import Main from '../main'
import Menu from '../menu'
import Order from '../order'
import Profile from '../profile'
import Coupon from '../coupon'
import Checkout from '../checkout'
import Redeem from '../redeem'
import Card from '../card'
import CardOrder from '../card-order'
import CardUseRecord from '../card-use-record'
import CardShop from '../card-shop'
import { Page, RedeemPlatform } from '../../constants/const'
import './index.scss'
import { useState } from "react";


function Index() {
  const [activeTab, setActiveTab] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const plusItem = (id) => {
    const newItems = [...items];
    const index = newItems.findIndex((newItem) => newItem.id === id);
    if (index > -1 && newItems[index].num < 100) {
      newItems[index].num += 1;
    } else {
      newItems.push({ id, num: 1 });
    }
    setItems(newItems);
  }

  const minusItem = (id) => {
    const newItems = [...items];
    const index = newItems.findIndex((newItem) => newItem.id === id);
    if (index > -1 && newItems[index].num > 0) {
      newItems[index].num -= 1;
      if(newItems[index].num === 0){
        newItems.splice(index,1);
      }
    }
    setItems(newItems);
  }

  const clearItems = () => {
    setItems([]);
  }


  function handleActiveTabChange(activeTab: number) {
    setActiveTab(activeTab);
  }
  

  const hiddenTabbar = () => {
    return activeTab === Page.Main
      || activeTab === Page.Profile
      || activeTab === Page.Order
      || activeTab === Page.Menu;
  }

  const tabBarClass = () => {
    return `tabbar-container ${hiddenTabbar()? '' : 'tabbar-container-hidden'}`
  }

  const renderContent = () => {
    switch (activeTab) {
      case Page.Main:
        return <Main onActiveTabChange={handleActiveTabChange}/>;
      case Page.Menu:
        return <Menu onActiveTabChange={handleActiveTabChange} items={items} plusItem={plusItem} minusItem={minusItem} clearItems={clearItems}/>;
      case Page.Order:
        return <Order/>;
      case Page.Profile:
        return <Profile onActiveTabChange={handleActiveTabChange}/>;
      case Page.Card:
        return <Card onActiveTabChange={handleActiveTabChange}/>;  
      case Page.Coupon:
        return <Coupon onActiveTabChange={handleActiveTabChange}/>;
      case Page.Checkout:
        return <Checkout onActiveTabChange={handleActiveTabChange} items={items}/>;
      case Page.Redeem:
        return <Redeem onActiveTabChange={handleActiveTabChange} />;
      case Page.CardOrder:
        return <CardOrder onActiveTabChange={handleActiveTabChange}/>;
      case Page.CardUseRecord:
        return <CardUseRecord onActiveTabChange={handleActiveTabChange}/>;
      case Page.CardShop:
        return <CardShop onActiveTabChange={handleActiveTabChange}/>;  
      default:
        return null;
    }
  };

  return (
        <View className='app-container'>
          {/* 内容区域 */}
          {renderContent()}
          {/* Tabbar */}
          <Tabbar className={tabBarClass()}
                fixed  
                value={activeTab}
                onSwitch={(value) => {
                  setActiveTab(value);
          }}
          >
            <Tabbar.Item title="首页" />
            <Tabbar.Item title="点餐" dot />
            <Tabbar.Item title="订单" />
            <Tabbar.Item title="我的" />
          </Tabbar>
        </View>
  )
}

export default Index

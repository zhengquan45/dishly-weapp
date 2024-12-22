import { View } from '@tarojs/components'
import { Tabbar } from '@nutui/nutui-react-taro'
import Main from '../main'
import Order from '../order'
import Cart from '../cart'
import Profile from '../profile'
import Coupon from '../coupon'
import './index.scss'
import { useState } from "react";
import Redeem from '../redeem'
import { Page } from '../../constants/const'


function Index() {
  const [activeTab, setActiveTab] = useState(0);

  function handleActiveTabChange(activeTab: number) {
    setActiveTab(activeTab);
  }
  const renderContent = () => {
    switch (activeTab) {
      case Page.Main:
        return <Main onActiveTabChange={handleActiveTabChange}/>;
      case Page.Order:
        return <Order />;
      case Page.Cart:
        return <Cart/>;
      case Page.Profile:
        return <Profile/>;
      case Page.Coupon:
        return <Coupon/>;
      case Page.Redeem:
        return <Redeem/>;
      default:
        return null;
    }
  };

  return (
        <View className='app-container'>
          {/* 内容区域 */}
          {renderContent()}
          {/* Tabbar */}
          <Tabbar fixed
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

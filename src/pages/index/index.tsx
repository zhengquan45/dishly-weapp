import { View } from '@tarojs/components'
import { Tabbar } from '@nutui/nutui-react-taro'
import Main from '../main'
import Menu from '../menu'
import Order from '../order'
import Profile from '../profile'
import { useRouter } from '@tarojs/taro';
import { Page } from 'src/constants/const';
import './index.scss'
import { useState } from "react";


function Index() {
  // 获取路由参数
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(() => {
    // 转换参数为数字类型
    return Number(router.params.activeTab) || Page.Main; // 默认值为 0
  });

  const renderContent = () => {
    switch (activeTab) {
      case Page.Main:
        return <Main/>;
      case Page.Menu:
        return <Menu/>;
      case Page.Order:
        return <Order/>;
      case Page.Profile:
        return <Profile/>;
      default:
        return <Main/>;
    }
  };

  return (
        <View className='app-container'>
          {/* 内容区域 */}
          {renderContent()}
          {/* Tabbar */}
          <Tabbar className='tabbar-container'
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

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


  return (
        <View className='app-container'>
          {/* 内容区域 */}
        </View>
  )
}

export default Index

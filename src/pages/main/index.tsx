import './index.scss'
import { Swiper } from '@nutui/nutui-react-taro'
import UserInfo from "./user-info";
import Operate from './operate';
import Marketing from './marketing';
import { View } from '@tarojs/components'

// Taro 额外添加的 hooks 要从 '@tarojs/taro' 中引入

import Taro from '@tarojs/taro'
import { useDidShow } from '@tarojs/taro'
import { useState } from 'react'
import request from 'src/utils/request'

function Main() {

  const [mainBanners, setMainBanners] = useState<MainBannerItemProps[]>([]); // 这里指定了类型为 string[] 

  // 获取主 Banner 数据
  const fetchMainBanners = async () => {
    try {
      const data = await request({
        url: '/api/banner/main',
        method: 'GET',
      });
      setMainBanners(data);
    } catch (error) {
      console.error('获取主 Banner 数据失败:', error);
    }
  };

  // 可以使用所有的 React Hooks
  useDidShow(() => {
    // 加载主 banner 数据
    fetchMainBanners();
  });
  
  return (
      <>
        <View className='main-container'>
        {/* 主广告栏 */}
        <Swiper defaultValue={1} autoPlay height={400}>
        {mainBanners.length > 0 ? (
          mainBanners.map((item, index) => (
            <Swiper.Item key={index}>
              <img
                width="100%"
                height="100%"
                onClick={() => {
                  Taro.navigateTo({
                    url: item.clickUrl,
                  });
                }}
                src={item.contentUrl}
                alt=""
              />
            </Swiper.Item>
          ))
        ) : (
          <View>Loading...</View>
        )}
        </Swiper>
        <UserInfo/>
        <Operate/>
        <Marketing />
        </View>
      </>
  )
}

export default Main

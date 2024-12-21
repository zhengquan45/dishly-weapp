import './index.scss'
import {Swiper, NoticeBar} from '@nutui/nutui-react-taro'
import {
  CommonEventFunction,
  SwiperProps as TaroSwiperProps,
} from '@tarojs/components'

import UserInfo from "./user-info";
import Operate from './operate';
import Marketing from './marketing';

function Main({onActiveTabChange}) {
  
  const onChange: CommonEventFunction<TaroSwiperProps.onChangeEventDetail> = (
    e
  ) => {
    console.log(`onChange is trigger ${e}`)
  }

  const mainBannerList = [
    'https://s2.loli.net/2024/12/18/iA4je2JWfu1U7ps.jpg',
    'https://s2.loli.net/2024/12/18/CgMJtcQXvEALmK9.jpg',
    'https://s2.loli.net/2024/12/18/iA4je2JWfu1U7ps.jpg',
    'https://s2.loli.net/2024/12/06/52UwuZzNq1loeTv.png',
  ]
  
  const mainNoticeText = '被食物治愈的一天!!'

  return (
      <>
        {/* 主广告栏 */}
        <Swiper defaultValue={1} autoPlay onChange={onChange} height={400}>
          {mainBannerList.map((item, index) => (
            <Swiper.Item key={item}>
              <img
                width="100%"
                height="100%"
                onClick={() => console.log(index)}
                src={item}
                alt=""
              />
            </Swiper.Item>
          ))}
        </Swiper>
        <UserInfo onActiveTabChange={onActiveTabChange}/>
        <Operate onActiveTabChange={onActiveTabChange}/>
        <NoticeBar content={mainNoticeText} />
        <Marketing />
      </>
  )
}

export default Main

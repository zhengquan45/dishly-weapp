import './index.scss'
import { Tabbar } from '@nutui/nutui-react-taro'
import { useSelector, useDispatch } from "react-redux";
import { RootState } from 'src/reducers';
import { setActiveTab } from 'src/actions/active-tab';
import Taro from '@tarojs/taro'

function CustomTabbar() {
  
  const activeTab = useSelector((state: RootState) => state.activeTab.value); // 获取 items 状态

  const dispatch = useDispatch();

  const pages = [
    {name:'首页',url: '/pages/main/index'},
    {name:'点餐',url: '/pages/menu/index',dot:true},
    {name:'订单',url: '/pages/order/index'},
    {name:'我的',url: '/pages/profile/index'}
  ]

  return (
      <>
        {/* Tabbar */}
        <Tabbar className='tabbar-container'
                fixed  
                value={activeTab}
                onSwitch={(index) => {
                  Taro.switchTab({
                    url: pages[index].url
                  })
                  dispatch(setActiveTab(index))
          }}
          >
            { 
            pages.map((page,index) => (
              <Tabbar.Item title={page.name} dot={page.dot} key={index}/>
            ))
            }
          </Tabbar>
      </>
  )
}

export default CustomTabbar

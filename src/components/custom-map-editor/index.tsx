import './index.scss'
import { View, Map} from '@tarojs/components'
import {  useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from '@nutui/icons-react-taro'
import { NavBar, SearchBar } from '@nutui/nutui-react-taro'
import Taro, { useDidShow } from '@tarojs/taro';
import request from 'src/utils/request'

function CustomMapEditor({onChange, value, placeholder}) {

  const [mapVisible, setMapVisible] = useState(false)

  const [searchVisible, setSearchVisible] = useState(false)

  const [currentLocation, setCurrentLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const [searchLocations,setSearchLocations] = useState<LocationProps[]>([]);

  const [locations,setLocations] = useState<LocationProps[]>([]);

 // 获取当前地址数据
 const fetchLocation = async () => {
  try {
    const data = await request({
      url: '/api/location',
      data:{
        latitude: currentLocation?.latitude,
        longitude: currentLocation?.longitude,
      }
    });
    data.forEach((item, index) => {
      item.id = index + 1;
      item.width = 20;
      item.height = 20;
      item.iconPath = '';
    });
    setLocations(data);
  } catch (error) {
    console.error('获取当前地址坐标失败:', error);
  }
};

useEffect(() => {
  fetchLocation();
}, [currentLocation]);

useDidShow(() => {
    Taro.authorize({
      scope: 'scope.userLocation',
      success() {
        // 授权成功后，调用 getLocation
        Taro.getLocation({
          type: 'gcj02', // 或 'wgs84'
          success: function (res) {
            setCurrentLocation({
              latitude: res.latitude,
              longitude: res.longitude,
            });
            console.log('获取位置成功：', res);
          },
          fail: function (err) {
            console.error('获取位置失败：', err);
          }
        });
      },
      fail() {
        // 如果用户拒绝授权，提示并引导打开设置页
        Taro.showModal({
          title: '授权失败',
          content: '请在设置中开启位置授权，以便使用相关功能',
          success(res) {
            if (res.confirm) {
              Taro.openSetting();
            }
          }
        });
      }
    });
    request({
      url: '/locations',
      method: 'GET',
    });
    
  })
  return (
      <>
          <View className='custom-map-editor-input' onClick={()=>{
            setMapVisible(true)
          }}>
            {
            value?
            <View className='custom-map-editor-input-value'>{value}</View>
            :
            <View className='custom-map-editor-input-placeholder'>{placeholder}</View>
            }
            <ArrowRight color='#777'/>
            </View>
          {
            mapVisible && (
              <View className='custom-map-container'>
                <NavBar style={{background: 'transparent',height: '60px',color: '#000',marginBottom:0}}
                  titleAlign="center"
                  back={
                  <>
                    <ArrowLeft size={14} />
                  </>
                  }
                  onBackClick={() =>{
                    setMapVisible(false)
                  }}
                >
                <span style={{color: '#000'}}>选择小区/写字楼</span>
                </NavBar>
                <SearchBar style={{height:'60px'}}shape="round" maxLength={5} placeholder='搜索小区/写字楼等'
                onFocus={()=>{
                  setSearchVisible(true)
                }}
                right={
                  <>
                   {
                    searchVisible &&
                    <span onClick={()=>setSearchVisible(false)}>取消</span> 
                   }
                  </>
                }
                />
                {
                  searchVisible?
                  (
                    <View className='custom-map-address-search-list'>
                    {
                       searchLocations.map((location) => (
                        <View className='custom-map-address-item' onClick={()=>{
                           onChange(location.name)
                           setSearchVisible(false)
                           setMapVisible(false)
                        }}>
                            <View className='custom-map-address-item-index'>
                              <View className='custom-map-address-item-num'>
                              {location.id}
                              </View>
                            </View>
                            <View className='custom-map-address-item-body'>
                              <View className='custom-map-address-item-title'>
                                  {location.name}
                              </View>
                              <View className='custom-map-address-item-detail'>
                                  {location.description}
                              </View>
                            </View>
                        </View>
                      ))
                    }
                  </View>
                  )
                  :
                  (
                    <View className='custom-map-address'>
                <Map
                  className="custom-map"
                  latitude={currentLocation.latitude}
                  longitude={currentLocation.longitude}
                  markers={locations}
                  scale={16}
                  onError={()=>{
                  }}
                  onRegionChange={(e)=>{
                    //@ts-ignore
                    if(e.mpEvent.type=='end'){
                      //@ts-ignore
                      const centerLocation = e.mpEvent.detail.centerLocation;
                      setCurrentLocation({
                        latitude: centerLocation.latitude,
                        longitude: centerLocation.longitude,
                      });
                    }
                  }}
                />
                <View className='custom-map-address-list'>
                    {
                       locations.map((location, index) => (
                        <View className='custom-map-address-item' onClick={()=>{
                           onChange(location.name)
                           setMapVisible(false)
                        }}>
                            <View className='custom-map-address-item-index'>
                              <View className='custom-map-address-item-num'>
                              {location.id}
                              </View>
                            </View>
                            <View className='custom-map-address-item-body'>
                              <View className='custom-map-address-item-title'>
                                  {location.name}
                              </View>
                              <View className='custom-map-address-item-detail'>
                                  {location.description}
                              </View>
                            </View>
                        </View>
                      ))
                    }
                </View>
                </View>
                  )
                }
              </View>
            )
          }
      </>
  )
}

// 设置默认 props
CustomMapEditor.defaultProps = {
  onChange: () => {},
  value: '',  
  placeholder: '请输入内容',
};

export default CustomMapEditor

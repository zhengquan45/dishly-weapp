import { View } from '@tarojs/components'
import './index.scss'
import { Animate } from '@nutui/nutui-react-taro'
import slotMachine from '@/assets/images/slot-machine.png'
import present from '@/assets/images/present.png'
import tofu from '@/assets/images/tofu.png'


function Marketing() {
  
  return (
        <>
        {/* 营销活动区 */}
        <View className='marketing-operate'>
          <View className='marketing-operate-item operate-button'
                onClick={() => {

                }}>
                <Animate type="ripple" loop>
              <View className='marketing-operate-item-image'>
                <img src={present}/>
              </View> 
              </Animate>
              邀请有礼
          </View>
          <View className='marketing-operate-item operate-button'
                onClick={() => {

                }}>  
              <View className='marketing-operate-item-image'>
                <img src={tofu}/>
              </View>   
              进群领福利
          </View>
          <View className='marketing-operate-item operate-button'
                onClick={() => {

                }}>
            <View className='marketing-operate-item-image'>
              <img src={slotMachine}/>
            </View>   
            每日抽奖
          </View>
          {/* <View className='marketing-operate-item operate-button'
                onClick={() => {

                }}>
            疯狂星期四
          </View> */}
        </View>
        </>
  )
}

export default Marketing

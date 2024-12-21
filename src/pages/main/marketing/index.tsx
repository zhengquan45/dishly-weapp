import { View } from '@tarojs/components'
import './index.scss'

function Marketing() {
  
  return (
        <>
        {/* 营销活动区 */}
        <View className='marketing-operate'>
          <View className='marketing-operate-item operate-button'
                onClick={() => {

                }}>
            邀请有礼
          </View>
          <View className='marketing-operate-item operate-button'
                onClick={() => {

                }}>
              进群有礼
          </View>
          <View className='marketing-operate-item operate-button'
                onClick={() => {

                }}>
            每日抽奖
          </View>
          <View className='marketing-operate-item operate-button'
                onClick={() => {

                }}>
            疯狂星期四
          </View>
        </View>
        </>
  )
}

export default Marketing


import { View }from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro'
import './index.scss'

function SplitOrder() {
  return (
      <>
         <View className='split-order-container'>
        <View className='split-order-item'>
          <View className='split-order-text'>拼单享满减 分账无需算</View>
          <Button
            type="primary"
            color="linear-gradient(to right, #ff6034, #ee0a24)"
            style={{
              margin: 8,
            }}
          >
            好友拼单
          </Button>
        </View>
      </View>
      </>
  )
}

export default SplitOrder

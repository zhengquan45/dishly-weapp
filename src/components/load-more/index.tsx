import { View } from '@tarojs/components'
import './index.scss'

function LoadMore({hasNextPage=false}) {

  return (
    <View className='load-more-list-bottom'>
      <View className='load-more-list-bottom-text'>
        { 
          hasNextPage?
          '加载中...':'已经到底了...'
        } 
      </View>
    </View>
  )
}

export default LoadMore

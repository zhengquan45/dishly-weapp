import { View } from '@tarojs/components'
import './index.scss'
import React from 'react'

function Empty({ children }: { children: string | React.ReactNode }) {

  return (
          <View className='empty'>
            <View className='empty-text'>
              { children }
            </View>
          </View>
  )
}

export default Empty

import { View } from '@tarojs/components'
import './index.scss'
import { useState } from 'react'

function Barrage({height='50px'}) {
  const list = [
    '不明觉厉',
    '喜大普奔321321312321',
    '男默女泪',
    '累觉不爱',
    '爷青结',
    '不明觉厉',
    '喜大普奔',
    '男默女泪',
  ]

  
  
  return (
       <View className='barrage-container' style={{height}}>
        {
          list.map((item, index) => {
            return (
              <View className='barrage-item' key={index}>
                {item}
              </View>
            )
          })
        }
      </View>
  )
}

export default Barrage

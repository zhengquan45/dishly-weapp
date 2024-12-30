import { View } from '@tarojs/components'
import './index.scss'
import { useState } from 'react'

function TarBar({options}) {


  const [tabbarIndex, setTabbarIndex] = useState(0)

 
  const tabberItemClass = (index) => {
    return `tabbar-item ${tabbarIndex === index ? 'tabbar-item-active' : ''}`
  }
  
  return (
       <View className='tabbar-container'>
        {
        options.map((option,index) => (
            <View className={tabberItemClass(index)} onClick={()=>{
              setTabbarIndex(index)
            }}>{option}</View>
          ))
        }
      </View>
  )
}

export default TarBar

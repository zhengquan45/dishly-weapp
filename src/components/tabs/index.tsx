import { View } from '@tarojs/components'
import './index.scss'
import { useState } from 'react'

function Tabs({options}) {


  const [tabsIndex, setTabsIndex] = useState(0)

 
  const tabsItemClass = (index) => {
    return `tabs-item ${tabsIndex === index ? 'tabs-item-active' : ''}`
  }
  
  return (
       <View className='tabs-container'>
        {
        options.map((option,index) => (
            <View className={tabsItemClass(index)} onClick={()=>{
              setTabsIndex(index)
            }}>{option}</View>
          ))
        }
      </View>
  )
}

export default Tabs

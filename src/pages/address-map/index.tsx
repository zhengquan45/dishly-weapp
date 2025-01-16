import './index.scss'
import { View, Map } from '@tarojs/components'
import { useRef } from 'react'


function AddressMap() {
 
  const mapRef = useRef(null)

  const markers = [
    {
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      title:'成都',
      width:20,
      height:20,
    }
  ]

  return (
      <>
        <View className='address-map-container'>
          <Map 
            ref={mapRef}
            longitude={113.324520}
            latitude={23.099994}
            scale={16}
            style={{width:'100%',height:'200px'}}
            onError={(e) => {
              console.log(e)
            }}
          />
        </View>
      </>
  )
}

export default AddressMap


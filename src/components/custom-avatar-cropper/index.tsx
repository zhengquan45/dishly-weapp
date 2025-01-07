import './index.scss'
import { View } from '@tarojs/components'
import { Camera } from '@nutui/icons-react-taro'

function CustomAvatarCropper({onChange, value}) {

  return (
      <>
         <View className='profile-edit-avator'>
            <View className='profile-edit-avator-image' onClick={()=>{
             
            }}>
              <img src={value} alt="" />
              <View className='profile-edit-camera'>
                <Camera />
              </View>
            </View>
          </View>
      </>
  )
}

export default CustomAvatarCropper

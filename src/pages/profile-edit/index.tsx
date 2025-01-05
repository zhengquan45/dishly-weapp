import { View } from '@tarojs/components'
import { Avatar, NavBar } from '@nutui/nutui-react-taro'
import { Page } from 'src/constants/const'
import { ArrowLeft } from '@nutui/icons-react-taro'
import './index.scss'

function ProfileEdit({onActiveTabChange}) {
  return (
      <View className='profile-edit-container'>
        <NavBar style={{background: '#fff',height: '60px',marginBottom: '0'}}
            titleAlign="center"
            back={
              <>
                <ArrowLeft size={14} />
              </>
            }
            onBackClick={() => onActiveTabChange(Page.Profile)}
          >
          <span>个人资料</span>
          </NavBar>
      </View>
  )
}

export default ProfileEdit

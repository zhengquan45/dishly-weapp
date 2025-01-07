import { View } from '@tarojs/components'
import { NavBar, Button, Form, Input, Radio } from '@nutui/nutui-react-taro'
import { ArrowLeft } from '@nutui/icons-react-taro'
import './index.scss'
import Taro from '@tarojs/taro'
import CustomAvatarCropper from 'src/components/custom-avatar-cropper'

function ProfileEdit() {

  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
  }

  const [form] = Form.useForm()

  const initialValues = {
    avatar: 'http://img.yzcdn.cn/vant/cat.jpeg',
    nickname: '张三',
    phone: 15659734336,
    gender: "2",
    birthday: '1990-01-01'
  }

  
  return (
      <View className='profile-edit-container'>
        <NavBar style={{background: '#fff',height: '60px',marginBottom: '0'}}
            titleAlign="center"
            back={
              <>
                <ArrowLeft size={14} />
              </>
            }
            onBackClick={() => {
              Taro.navigateBack()
            }}
          >
          <span>个人资料</span>
          </NavBar>
          
          <Form
        form={form}
        initialValues={initialValues}
        onFinish={(values) => submitSucceed(values)}
        onFinishFailed={(_, errors) => submitFailed(errors)}
      >
        <Form.Item 
        name="avatar"
        noStyle
        >
         <CustomAvatarCropper onChange={(data)=>{
            form.setFieldsValue({avatar: data})
         }} value={form.getFieldValue('avatar')}/>
        </Form.Item>
        <Form.Item
          label="昵称"
          name="nickname"
        >
          <Input placeholder="请输入昵称" type="text" />
        </Form.Item>
        <Form.Item
          label="手机"
          name="phone"
        >
          <Input placeholder="请输入手机号" readOnly type="text" />
        </Form.Item>
        <Form.Item
          label="性别"
          name="gender"
        >
          <Radio.Group>
            <Radio value="1">男</Radio>
            <Radio value="2">女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="生日"
          name="birthday"
        >
          <Input placeholder="请输入生日日期" readOnly type="text" />
        </Form.Item>
      </Form>
      <View className='profile-edit-notice'>
        根据未成年人保护相关法律法规，我们不主动处理14周年以下用户的个人信息。如果您为14周岁以下用户，请勿填写个人信息。
      </View>
      <View className='profile-edit-operate'>
      <Button type="primary" size='large' block onClick={()=>{
            console.log(form.getFieldsValue(true))
          }}>
            保存
          </Button>
      </View>
      
      </View>
  )
}

export default ProfileEdit

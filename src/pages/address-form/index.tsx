import './index.scss'
import { View } from '@tarojs/components'
import { Form, Input, Radio, Button, TextArea} from '@nutui/nutui-react-taro'
import CustomMapEditor from 'src/components/custom-map-editor'
import Taro from '@tarojs/taro'


function AddressForm() {
 
  const [form] = Form.useForm()
 
  const initialValues = {
    address: '广东省深圳市南山区',
    streetNum: '8座206号',
    addressPeople: '张三',
    phone: 15659734336,
    addressLabel: '1',
    remark: '备注'
  }

  const submitFailed = (error: any) => {
    Taro.showToast({ title: JSON.stringify(error), icon: 'error' })
  }

  const submitSucceed = (values: any) => {
    Taro.showToast({ title: JSON.stringify(values), icon: 'success' })
  }

  return (
      <>
        <View className='address-form-container'>
          <View className='address-form-title'>
              添加收货地址
          </View>
          <Form
            form={form}
            // initialValues={initialValues}
            onFinish={(values) => submitSucceed(values)}
            onFinishFailed={(_, errors) => submitFailed(errors)}
          >
            <Form.Item 
              name='address'
              label="收货地址"
            >
              <CustomMapEditor placeholder="小区名称/写字楼"/>
            </Form.Item>
            <Form.Item 
              name="streetNum"
              label="街道/门牌号"
            >
              <Input placeholder="楼号/门牌号" type="text" />
            </Form.Item>
            <Form.Item 
              name="addressPeople"
              label="收货人"
            >
              <Input placeholder="收货人姓名" type="text" />
            </Form.Item>
            <Form.Item 
              name="phone"
              label="手机号码"
            >
              <Input placeholder="收货人手机号" type="text" />
            </Form.Item>
            <Form.Item 
              name="addressLabel"
              label="地址标签"
            >
              <Radio.Group defaultValue="1" direction="horizontal">
                <Radio shape="button" value="1">
                  家
                </Radio>
                <Radio shape="button" value="2">
                  公司
                </Radio>
                <Radio shape="button" value="3">
                  朋友家
                </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item 
              name="remark"
              label="备注"
            >
              <TextArea placeholder='如果无法搜到地址请在备注中说明'/>
            </Form.Item>
          </Form>
          <View className='address-form-operate'>
            <Button type="primary" size='large' block onClick={()=>{
            console.log(form.getFieldsValue(true))
            }}>
              保存收货地址
            </Button>
            <Button fill='none' size='large' block color="#ddd"
            style={{
              marginTop: '10px'
            }} onClick={()=>{
            console.log(form.getFieldsValue(true))
            }}>
              删除收货地址
            </Button>
          </View>
        </View>
      </>
  )
}

export default AddressForm


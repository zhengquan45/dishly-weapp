import Taro from '@tarojs/taro';

const ENV = {
  "development:h5": '', // 开发环境
  "development:weapp": 'http://127.0.0.1:8091', // 生产环境
//   "production:h5": 'http://127.0.0.1:8091', // 开发环境
//   "production:weapp": 'https://example.com', // 生产环境
};

// 根据当前运行环境选择基础 URL
const BASE_URL = ENV[process.env.NODE_ENV+":"+process.env.TARO_ENV];


interface RequestOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: object;
  headers?: object;
  onSuccess?: (data: any) => void; // 成功回调
  onError?: (error: any) => void;  // 失败回调
}

const request = async ({
  url,
  method = 'GET',
  data = {},
  headers = {},
  onSuccess = () => {},
  onError = () => {},
}: RequestOptions) => {
  try {
    const response = await Taro.request({
      url: `${BASE_URL}${url}`,
      method,
      data,
      header: {
        'satoken': Taro.getStorageSync('token') || '',
        ...headers,
      },
    });

    if (response.statusCode === 200) {
      // 请求成功
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } else if (response.statusCode === 401) {
      // 未授权
      console.error('未授权，请重新登录');
      Taro.showToast({
        title: '未授权，请重新登录',
        icon: 'none',
      });
      Taro.redirectTo({ url: '/pages/main/index' });
    } else {
      console.error('请求错误:', response);
      throw new Error(`HTTP 错误: ${response.statusCode}`);
    }
  } catch (error) {
    console.error('网络请求失败:', error);
    Taro.showToast({
      title: '网络错误，请稍后再试',
      icon: 'none',
    });
    if (onError) {
      onError(error); // 调用失败回调
    }
    throw error;
  }
};

export default request;

export default defineAppConfig({
  pages: [
    'pages/main/index',
    'pages/order/index',
    'pages/menu/index',
    'pages/profile/index',
    'pages/auth/index',
    'pages/profile-edit/index',
    'pages/coupon/index',
    'pages/card/index',
    'pages/checkout/index',
    'pages/address/index',
    'pages/address-form/index',
    'pages/address-map/index',
    'pages/redeem/index',
    'pages/card-order/index',
    'pages/card-use-record/index',
    'pages/card-shop/index',
    'pages/order-detail/index',
  ],
  requiredPrivateInfos:[
    "getLocation",
  ],
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#8a8a8a',
    selectedColor: '#ff0000',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/main/index',
        text: '首页',
        // iconPath: 'assets/tabbar/home.png',
        // selectedIconPath: 'assets/tabbar/home-active.png'
      },
      {
        pagePath: 'pages/menu/index',
        text: '菜单',
        // iconPath: 'assets/tabbar/menu.png',
        // selectedIconPath: 'assets/tabbar/menu-active.png'
      },
      {
        pagePath: 'pages/order/index',
        text: '订单',
        // iconPath: 'assets/tabbar/order.png',
        // selectedIconPath: 'assets/tabbar/order-active.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        // iconPath: 'assets/tabbar/profile.png',
        // selectedIconPath: 'assets/tabbar/profile-active.png'
      },
    ]
  }
})

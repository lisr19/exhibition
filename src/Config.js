//项目公共配置

export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: '军民融合平台',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  gisServer:'http://llz.halohealth.cn:8080/',//gis地图服务器地址
  baseUrl: {//服务器地址
    dev: 'http://192.168.0.123:8090/',
    // pro: 'http://120.24.0.130:8091/'
    pro: 'http://llz.halohealth.cn:8090/'
  }
}

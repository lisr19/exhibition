import {post} from '../http'


// 用户登录
export function doLogin () {
  const userInfo = {
    username: 15521171398,
    password: 123456,
    type:3
  }
  return post('/api/0.1/user/login', userInfo)
}

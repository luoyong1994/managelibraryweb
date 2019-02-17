import {
  get,
  post
} from './http'

//封装请求方法
export const login = data => post("user/login.do", data);



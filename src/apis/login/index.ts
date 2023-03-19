import request from '@/utils/request'

/**
 * 提交 Login 登录信息
 */
export const postLoginInfo = (params: any) => {
  return request.post('/auth/getToken', params);
}
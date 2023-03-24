import request from '@/utils/request'

export const postArticleInfo = (params: any) => {
  return request.post('/article', params);
}
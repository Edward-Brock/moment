import request from '@/utils/request'

/**
 * 获取文章内容
 */
export const getArticleInfo = () => {
  return request.get('/article');
}
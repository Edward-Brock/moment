import request from '@/utils/request'

/**
 * 获取 Moment 的所有配置信息
 */
export const getOptionInfo = () => {
  return request.get('/option');
}

/**
 * 获取文章内容
 */
export const getArticleInfo = () => {
  return request.get('/article');
}
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

/**
 * 对选中的内容进行点赞，通过传过来的 id 传到服务器中进行当前动态的点赞累加
 */
export const getArticleLikeInfo = (id: number) => {
  return request.post(`/article/like/${id}`);
}
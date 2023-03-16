import request from '@/utils/request'

/**
 * 获取 Moment 的所有配置信息
 */
export const getOptionInfo = () => {
  return request.get('/option');
}
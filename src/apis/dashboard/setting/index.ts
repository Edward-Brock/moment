import request from '@/utils/request'

export const patchSettingInfo = (id: number, params: any) => {
  return request.patch('/option/' + id, params);
}
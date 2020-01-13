import { fetch, post, patch, del } from '../http'

//获取健康数据总数以及各园区活跃度
export function findHealthData (params) {
  return fetch('/api/0.1/healthData/findTotal', params)
}

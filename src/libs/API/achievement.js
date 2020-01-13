import { fetch, post, patch, del } from '../http'


// 按月统计某年的军需对接
export function armyCharts (params) {
  return fetch('/api/0.1/productSupply/countByMonth', params)
}
// 获取科研对接数据
export function technologyCharts (params) {
  return fetch('/api/0.1/technologySupply/countByMonth', params)
}
// 按月统计某年的合作对接
export function cooperationCharts (params) {
  return fetch('/api/0.1/projectSupply/countByMonth', params)
}


import { fetch, post, patch, del } from '../http'
/**
 * 军品质检申请
 * **/
// 按园区统计某年申请数、通过数、未通过数
export function countByYearAndPark (params) {
  return fetch('api/0.1/detectApply/statByYearAndPark', params)
}
// 统计历年检测申请
export function countByYear (params) {
  return fetch('api/0.1/detectApply/countByYear', params)
}
// 统计历年检测申请通过率
export function countPassRateByYear (params) {
  return fetch('api/0.1/detectApply/countPassRateByYear', params)
}

// 统计历年检测申请通过数
export function countPassByYear (params) {
  return fetch('api/0.1/detectApplyTrack/countPassByYear', params)
}
// 统计历年检测申请未通过数
export function countUnPassByYear (params) {
  return fetch('api/0.1/detectApplyTrack/countUnPassByYear', params)
}

// 按产品类型统计30日内申请数
export function countByProductTypeIn30Days (params) {
  return fetch('api/0.1/detectApply/countByProductTypeIn30Days', params)
}

//质检申请数
export function getDetectApply (params) {
	return fetch('/api/0.1/detectApply/countByMonthAndPark', params)
}


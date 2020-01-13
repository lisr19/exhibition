import { fetch } from '../http'
/**
 * 培训课程
 * **/
// 获取课程数据
export function findCourseData (params) {
  return fetch('/api/0.1/course/list', params)
}



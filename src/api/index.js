import axios from "@/axios.js"

/**
 *  订单统计1
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getStatistics1() {
    return axios.get("/admin/statistics1")
}

/**
 * 订单统计2
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getStatistics2() {
    return axios.get("/admin/statistics2")
}


/**
 * Echarts统计图标
 * @param type 1:今日 2:昨日 3:本周 4:本月 5:本年
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getStatistics3(type) {
    return axios.get("/admin/statistics3?type=" + type)
}

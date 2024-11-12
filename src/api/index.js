import axios from "@/axios.js"

/**
 *  后天统计
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getStatistics1() {
    return axios.get("/admin/statistics1")
}

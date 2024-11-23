import axios from "@/axios.js"

/**
 *  登录接口
 * @param username admin  用户名
 * @param password admin  密码
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function login(username, password) {
    return axios.post("/admin/login", {
        username,
        password
    })
}

/**
 * 用户权限
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function getinfo() {
    return axios.post("/admin/getinfo")
}


/**
 * 退出
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function logout() {
    return axios.post("/admin/logout")
}

/**
 * 修改密码
 * @param data 修改密码参数
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export function updatepassword(data) {
    return axios.post("/admin/updatepassword",data)
}

/**
 * 获取管理员列表
 * @param {number} page - 当前页码
 * @param {Object} query - 查询参数
 * @param {number} [query.limit=10] - 每页显示的记录数，默认为10
 * @param {string} [query.keyword=""] - 查询关键词，默认为空字符串
 * @returns {Promise<axios.AxiosResponse<any>>} - 返回axios的响应Promise
 */
export function getManagerList(page, query = {
    limit: 10,
    keyword: ""
}) {
    // 初始化查询参数数组
    let q = []

    // 遍历查询参数对象，将非空参数添加到查询参数数组中
    for (const key in query) {
        if (query[key]) {
            q.push(`${key} = ${encodeURIComponent(query[key])}`)
        }
    }
    // 将查询参数数组连接成查询字符串
    let r = q.join("&")

    // 如果有查询字符串，则在前面加上问号
    r = r ? "?" + r : ""

    // 发送GET请求获取管理员列表
    return axios.get(`/admin/manager/${page}${r}`)
}

/**
 *  修改状态
 * @param {*} id 修改用户id
 * @param {*} status  修改状态
 */
export function updateManagerStatus(id,status){
    return axios.post(`/admin/manager/${id}/update_status`,{
        status
    })
}
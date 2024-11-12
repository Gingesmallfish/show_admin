import {useCookies} from "@vueuse/integrations/useCookies";
const TokenKey  = "auth-token";

const cookie = useCookies()

/**
 * 获取token
 * @returns {any} 参数
 */
export function getToken() {
    return cookie.get(TokenKey)
}

/**
 * 设置token
 * @param token 参数
 */
export function setToken(token) {
    return cookie.set(TokenKey,token)
}

/**
 * 清楚token
 * @param token 参数
 */
export function removeToken(token) {
    return cookie.remove(TokenKey, token)
}

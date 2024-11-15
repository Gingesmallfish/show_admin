import { createStore } from 'vuex'
import { getinfo, login } from "@/api/manager.js";
import { removeToken, setToken } from '@/composables/auth.js'
// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      // 用户信息
      user: {},

      // 侧边宽度
      asideWidth: "250px",

      menus: [],
      ruleNames: []
    }
  },
  mutations: {
    // 记录用户信息
    SET_USERINFO(state, user) {
      state.user = user
    },

    // 展开/缩起侧边栏
    handelAsideWidth(state) {
      state.asideWidth = state.asideWidth === "250px" ? "64px" : "250px"
    },

    SET_MENUS(state, menus) {
      state.menus = menus
    },

    SET_RULENAMES(state, ruleNames) {
      state.ruleName = ruleNames
    }
  },
  actions: {
    // 登录
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        login(username, password).then(response => {
          setToken(response.token)

          resolve(response)
        }).catch(err => reject(err))
      })
    },
    // 获取当前登录用户信息
    getinfo({ commit }) {
      return new Promise((resolve, reject) => {
        getinfo().then(res => {
          commit('SET_USERINFO', res)
          commit('SET_MENUS', res.menus)
          commit('SET_RULENAMES', res.ruleNames)
          resolve(res)
        }).catch(err => reject(err))
      })
    },
    // 退出登录
    logout({ commit }) {
      // 移除cookie里对的token
      removeToken()
      // 清楚当前用户状态
      commit('SET_USERINFO', {})
    }

  }
})

export default store

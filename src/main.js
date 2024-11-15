import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css' // 引入WindCSS
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入icon
import {router} from './router'
import store from './store'
import "@/permission.js"
import "nprogress/nprogress.css"
import App from './App.vue'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(store)
app.use(router)
app.use(ElementPlus)


import permission from '@/directives/permission'

app.use(permission)
app.mount('#app')

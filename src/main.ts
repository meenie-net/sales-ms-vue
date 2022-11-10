import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import moment from 'moment'
import 'moment/dist/locale/zh-cn'
import VueCropper from 'vue-cropper'

import App from './App.vue'
import router from './router'
import UtilModel from '@/util-model'

import 'normalize.css/normalize.css'
import 'element-plus/es/components/message/style/css'
import '@/assets/css/main.less'
import 'vue-cropper/dist/index.css'

moment.locale('zh-cn')


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(UtilModel)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(VueCropper)

app.config.globalProperties.$moment = moment

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')

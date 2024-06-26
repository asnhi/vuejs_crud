import './router/index.js';
import axios from 'axios';
window.axios = axios;

import 'ant-design-vue/dist/reset.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-utilities.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Drawer, Button, message, List, Menu, Card, Table} from 'ant-design-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Drawer)
app.use(Button)
app.use(List)
app.use(Menu)
app.use(Card)
app.use(Table)
app.mount('#app')

app.config.globalProperties.$message = message

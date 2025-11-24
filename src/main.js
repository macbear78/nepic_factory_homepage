import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css' // ✅ Tailwind CSS 불러오기
import router from './router'  // router import
import vuetify from './plugins/vuetify'
import mixins from './mixins'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(createPinia())  
app.use(router) 
app.use(vuetify)
app.mixin(mixins)
app.use(store);
app.use(VueSweetalert2);


app.mount('#app') 
 
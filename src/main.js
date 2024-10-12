import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios.js'
import '../public/sass/main.scss'
import vuetify from "./plugins/vuetify.js"
import Toast from "./plugins/toaster.js"
import i18n from './plugins/i18n.js'
// import 'preline/dist/preline.css';
// import prelinePlugin from './plugins/preline.js';// import vueHead from './plugins/vuehead.js'
// import carousal from "./plugins/carousal.js"
// import VueDatePicker from "./plugins/date-pticker.js"

const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(vuetify)
app.use(store)
app.use(Toast);
app.use(i18n);
// app.use(prelinePlugin);
// app.use(vueHead);
// app.use(carousal);
// app.use(VueDatePicker);

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Amplify } from 'aws-amplify'
import AmplifyVue from '@aws-amplify/ui-vue'
import awsconfig from './aws-exports'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import '@aws-amplify/ui-vue/styles.css'

Amplify.configure(awsconfig)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(AmplifyVue)
app.mount('#app')

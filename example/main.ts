/* main.ts */
import { createApp } from 'vue'
import App from './app.vue'
// import BrainButton from '@bubble-UI/components/button'
import '@bubble-UI/theme-chalk/src/index.scss';
import BubbleUi from '@bubble-UI/components';

const app = createApp(App)
app.use(BubbleUi)
app.mount('#app')
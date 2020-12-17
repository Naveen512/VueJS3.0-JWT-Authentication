import { createApp } from 'vue'
import App from './App.vue'
import * as appRouter from './appRouter';
import store from './store/index';

const app = createApp(App)
app.use(appRouter.routeConfig);
app.use(store);
app.mount('#app')

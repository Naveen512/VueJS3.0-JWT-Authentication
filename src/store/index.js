import { createStore } from "vuex";
import authModule from './modules/auth';
import todoModule from './modules/todo';

const store = createStore({
    modules:{
        auth:authModule,
        todo: todoModule
    }
});

export default store;
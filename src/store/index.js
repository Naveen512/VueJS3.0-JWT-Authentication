import { createStore } from "vuex";
import authModule from './modules/auth';

const store = createStore({
    modules:{
        auth:authModule
    }
});

export default store;
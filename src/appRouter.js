import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";
import store from "./store/index";

const routes = [
  { path: "/", component: Home, meta: { requiredAuth: false } },
  { path: "/login", component: Login, meta: { requiredAuth: false } },
  { path: "/dashboard", component: Dashboard, meta: { requiredAuth: true } },
];

export const routeConfig = createRouter({
  history: createWebHistory(),
  routes: routes,
});

routeConfig.beforeEach((to,from, next) => {
    console.log(store.getters["auth/getAuthData"].token);
    if(!store.getters["auth/getAuthData"].token){
        const access_token = localStorage.getItem("access_token");
        const refresh_token = localStorage.getItem("refresh_token");
        if(access_token){
            const data = {
                access_token:access_token,
                refresh_token:refresh_token
            };
            store.commit('auth/saveTokenData',data);
        }
    }
    const auth = store.getters["auth/isTokenActive"];

    if(to.fullPath == "/"){
        return next();
    }
    else if(auth && !to.meta.requiredAuth){
        return next({path:"/dashboard"});
    }
    else if(!auth && to.meta.requiredAuth){
        return next({path: '/login'});
    }

    return next();
});



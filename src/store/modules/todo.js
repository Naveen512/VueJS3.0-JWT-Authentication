import jwtInterceptor  from '../../shared/jwtInterceptor';

const state = () => ({
    todos :[]
});

const getters = {
    getAlltodos(state){
        return state.todos;
    }
};

const actions = {
    async getAllTodos({commit}){
        var response = await jwtInterceptor.get('http://localhost:3000/todos');
        if(response && response.data){
            commit('setTodos', response.data);
        }
    }
};

const mutations = {
    setTodos(state, payload){
        state.todos = payload
    }
};

export default{
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
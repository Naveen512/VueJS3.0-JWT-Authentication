<template>
  <div>
    <h1>Dashboard Page</h1>
    <div>UserName -- {{ gettersAuthData.userName }}</div>
    <div>Id -- {{ gettersAuthData.userId }}</div>
    <div>
        <h6>My Todos</h6>
        <button type="button" class="btn btn-primary" @click="show()">Show Todos</button>
        <ul>
            <li v-for="(t, index) in gettersAllTodos" :key="index">
                {{t}}
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("todo",{
        gettersAllTodos:"getAlltodos"
    }),
    ...mapGetters("auth", {
      gettersAuthData: "getAuthData",
    }),
  },
  methods:{
      ...mapActions("todo",{
          actionsGetAllTodos:'getAllTodos'
      }),
      async show(){
          await this.actionsGetAllTodos();
      }
  }
};
</script>
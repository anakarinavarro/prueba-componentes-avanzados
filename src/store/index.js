import Vue from "vue";
import Vuex from "vuex";
import { moduleCursos } from "@/store/module/cursos";
import { usersModule } from "./module/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cursos: moduleCursos,
    users: usersModule,
  },
});

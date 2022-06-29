import { DB } from "@/plugins/firebase";

export const moduleCursos = {
  namespaced: true,
  state: {
    list: [],
    loading: false,
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async getAll({ commit }) {
      commit("SET_LOADING", true);
      try {
        const curso = [];
        const cursos = DB.collection("cursos").get();

        cursos.forEach((document) => {
          curso.push({ ...document.data(), id: document.id });
        });
        commit("SET_LIST", curso);
      } catch (error) {
        console.error("no trae los cursos", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};

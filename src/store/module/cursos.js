import { DB } from "@/plugins/firebase";

export const moduleCursos = {
  namespaced: true,
  state: {
    list: [],
    loading: false,
  },
  getters: {
    totalAlumnosPermitidos(state) {
      return state.list.reduce((accumulator, curso) => {
        accumulator += curso.cupos;
        return accumulator;
      }, 0);
    },
    totalAlumnosInscritos(state) {
      return state.list.reduce((accumulator, curso) => {
        accumulator += curso.inscritos;
        return accumulator;
      }, 0);
    },
    totalCuposRestantes(state, getters) {
      return getters.totalAlumnosPermitidos - getters.totalAlumnosInscritos;
    },
    totalCursosTerminados(state) {
      return state.list.reduce((accumulator, curso) => {
        if (curso.terminado) accumulator++;
        return accumulator;
      }, 0);
    },
    totalCursosActivo(state, getters) {
      return state.list.length - getters.totalCursosTerminados;
    },
    totalCursos(state) {
      return state.list.length;
    },
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
        const cursos = [];
        const cursos$ = await DB.collection("cursos").get();

        cursos$.forEach((document) => {
          cursos.push({ ...document.data(), id: document.id });
        });
        commit("SET_LIST", cursos);
      } catch (error) {
        console.error("no trae los cursos", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async createOne({ commit }, newCurso) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("cursos").add(newCurso);
      } catch (error) {
        console.error("no crea un curso", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async removeOneById({ commit }, id) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("cursos").doc(id).delete();
      } catch (e) {
        console.error("Error al borrar documento: ", id);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  async updateById({ commit }, { id, ...newCurso }) {
    commit("SET_LOADING", true);
    try {
      await DB.collection("cursos").doc(id).update(newCurso);
    } catch (e) {
      console.error("Error al editar documento: ", id);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const usersModule = {
  namespaced: true,
  state: {
    user: null,
    loading: false,
  },
  getters: {
    activeLogin(state) {
      return !!state.user;
    },
  },
  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async subscribeToAuthStateChange({ commit }) {
      await firebase.auth().onAuthStateChanged((user) => {
        commit("SET_USER", user);
      });
    },
    async signInWithEmailAndPassword({ commit }, credenciales) {
      commit("SET_LOADING", true);
      try {
        await firebase.auth().signInWithEmailAndPassword(credenciales.email, credenciales.password);
        commit("SET_USER", credenciales);
      } catch (error) {
        console.error("no funca", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async createUserWithEmailAndPassword({ commit }, newUser) {
      commit("SET_LOADING", true);

      try {
        await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
      } catch (error) {
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async signOut({ commit }) {
      commit("SET_LOADING", true);
      try {
        firebase.auth().signOut();

        commit("SET_USER", null);
      } catch (error) {
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};

<template>
  <div>
    <v-app-bar color="primary" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> Curso Alfa Web </v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-btn text v-if="activeLogin">{{ user.email }}</v-btn>
      <v-btn icon @click="signOut()">
        <router-link to="/"> <v-icon color="white">mdi-login</v-icon></router-link>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item link to="/CursosView">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Cursos</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/AdminView">
          <v-list-item-icon>
            <v-icon> mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Administracion</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  computed: {
    ...mapState("users", ["user"]),
    ...mapGetters("users", ["activeLogin"]),
  },
  methods: {
    ...mapActions("users", ["signOut"]),
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style></style>

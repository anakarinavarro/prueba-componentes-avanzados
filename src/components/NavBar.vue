<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title> Curso Alfa Web </v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-btn text v-if="activeLogin">Usuario: {{ user.email }}</v-btn>
      <v-btn icon @click="signOut()">
        <router-link to="/">
          <v-icon>mdi-login</v-icon>
        </router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("users", ["user"]),
    ...mapGetters("users", ["activeLogin"]),
  },
  methods: {
    ...mapActions("users", ["signOut"]),
  },
};
</script>

<style></style>

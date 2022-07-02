<template>
  <v-layout>
    <v-container>
      <v-row>
        <v-col>
          <h1>Listado de cursos</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-flex v-for="curso in cursos" :key="curso.id">
          <CardCursos :value="curso" />
        </v-flex>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CardCursos from "@/components/CardCursos.vue";

export default {
  components: { CardCursos },
  computed: {
    ...mapState("users", ["user"]),
    ...mapState("cursos", {
      cursos: (state) => state.list,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions("cursos", {
      getAllCursos: "getAll",
    }),
  },

  mounted() {
    this.getAllCursos();
  },
};
</script>

<style></style>

<template>
  <v-data-table :headers="headers" :items="value" class="elevation-1">
    <template v-slot:item.costo="{ item }">
      <v-chip color="green" dark>${{ item.costo }}</v-chip>
    </template>

    <template v-slot:item.terminado="{ item }">
      <v-chip dark :color="item.terminado ? 'info' : 'grey lighten-1'">
        {{ item.terminado ? "Si" : "No" }}
      </v-chip>
    </template>

    <template v-slot:item.fecha="{ item }">
      <v-chip dark color="green">
        {{ item.fecha }}
      </v-chip>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small color="info" class="mr-2" @click="openEdit()" :value="item">
        mdi-pencil
      </v-icon>
      <v-icon small color="error" @click="removeUser(item.id)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  props: ["value"],
  data: () => ({
    headers: [
      {
        text: "Curso",
        value: "name",
      },
      {
        text: "Cupos",
        value: "cupos",
      },
      {
        text: "Inscritos",
        value: "inscritos",
      },
      {
        text: "Duración",
        value: "duracion",
      },
      {
        text: "Costo",
        value: "costo",
      },
      {
        text: "Terminado",
        value: "terminado",
      },
      {
        text: "Fecha",
        value: "fecha",
      },
      {
        text: "Acciones",
        value: "actions",
      },
    ],
  }),
  computed: {
    ...mapState("cursos", {
      cursos: (state) => state.list,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions("cursos", {
      removeOneUserById: "removeOneById",
      getAllCursos: "getAll",
    }),
    async removeUser(cursoId) {
      await this.removeOneUserById(cursoId);
      await this.getAllCursos();
    },
    openEdit() {
      this.$router.push("AdminView/EditView");
    },
  },
};
</script>

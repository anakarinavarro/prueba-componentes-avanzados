<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Tabla de Administración</h1>
        <Modal class="white pa-6" />
        <TableCursos :value="cursos" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-alert color="purple" outlined icon="mdi-account-group" type="success"
          >Cantidad Total de Alumnos Permitidos: <strong>{{ totalAlumnosPermitidos }}</strong>
        </v-alert>

        <v-alert color="blue" icon="mdi-account-multiple-check" outlined type="success"
          >Cantidad Total de Alumnos Inscritos:
          <strong>{{ totalAlumnosInscritos }}</strong></v-alert
        >

        <v-alert color="red" icon="mdi-account-clock" outlined type="success"
          >Cantidad Total de Cupos Restantes: <strong>{{ totalCuposRestantes }}</strong></v-alert
        >

        <v-alert color="pink" icon="mdi-cancel" outlined type="success"
          >Cantidad Total de Cursos Terminados:
          <strong>{{ totalCursosTerminados }}</strong></v-alert
        >

        <v-alert color="Brown" icon="mdi-bell-ring" outlined type="success"
          >Cantidad Total de Cursos Activos: <strong>{{ totalCursosActivo }}</strong></v-alert
        >

        <v-alert color="orange" icon="mdi-bell-ring" outlined type="success"
          >Cantidad Total de Cursos: <strong>{{ totalCursos }}</strong></v-alert
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import Modal from "../components/Modal.vue";
import TableCursos from "../components/TableCursos.vue";

export default {
  components: { Modal, TableCursos },
  computed: {
    ...mapState("cursos", {
      cursos: (state) => state.list,
      loading: (state) => state.loading,
    }),
    ...mapGetters("cursos", [
      "totalAlumnosPermitidos",
      "totalAlumnosInscritos",
      "totalCuposRestantes",
      "totalCursosTerminados",
      "totalCursosActivo",
      "totalCursos",
    ]),
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

<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-sheet class="pa-12" elevation="12">
            <h1>Editar Curso:</h1>
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="editarCurso()">
              <v-text-field v-model="newCurso.name" label="Name"></v-text-field>

              <v-text-field v-model="newCurso.url" label="Url de la Imagen"></v-text-field>

              <v-text-field v-model="newCurso.cupos" label="Cupos del Curso"></v-text-field>

              <v-text-field
                v-model="newCurso.inscritos"
                label="Incritos en el Curso"
              ></v-text-field>

              <v-text-field v-model="newCurso.duracion" label="Duración del Curso"></v-text-field>

              <v-text-field v-model="newCurso.costo" label="Costo del Curso"></v-text-field>

              <v-text-field v-model="newCurso.codigo" label="Codigo del Curso"></v-text-field>

              <v-container fluid>
                <v-textarea
                  v-model="newCurso.descripcion"
                  label="Descripcion"
                  :value="value"
                ></v-textarea>
              </v-container>

              <v-text-field v-model="newCurso.fecha" label="Fecha del Curso"></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate()"
                type="submit"
              >
                Guardar
              </v-btn>

              <v-btn color="error" class="mr-4" @click="regresar()"> regresar </v-btn>
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data: () => ({
    valid: true,
    newCurso: {},
  }),
  props: ["value"],
  computed: {
    ...mapState("cursos", {
      cursos: (state) => state.list,
      loading: (state) => state.loading,
    }),
  },

  methods: {
    ...mapActions("cursos", {
      updateById: "updateById",
      getAllCursos: "getAll",
    }),
    validate() {
      this.$refs.form.validate();
    },
  },
  async editCurso() {
    if (this.$refs.form.validate()) {
      await this.updateById(this.newCurso);
    }
  },
  regresar() {
    this.$router.push(`/administracion`);
  },
  mounted() {},
};
</script>

<style></style>

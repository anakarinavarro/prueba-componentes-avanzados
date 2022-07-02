<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" color="info" v-model="modal"> Agregar Curso </v-btn>
      </template>
      <v-col class="pa-10 white">
        <h1>Agregar Curso</h1>
        <v-row>
          <v-col col="12">
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="agregarCurso()">
              <v-text-field
                v-model="curso.name"
                :counter="20"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="curso.url"
                :counter="200"
                :rules="urlRules"
                label="Url de la Imagen"
                required
              ></v-text-field>

              <v-text-field
                v-model="curso.cupos"
                :counter="10"
                :rules="cuposRules"
                label="Cupos del Curso"
                required
              ></v-text-field>

              <v-text-field
                v-model="curso.inscritos"
                :counter="10"
                :rules="inscritosRules"
                label="Incritos en el Curso"
                required
              ></v-text-field>

              <v-text-field
                v-model="curso.duracion"
                :counter="10"
                :rules="duracionRules"
                label="Duración del Curso"
                required
              ></v-text-field>

              <v-text-field
                v-model="curso.costo"
                :counter="10"
                :rules="costoRules"
                label="Costo del Curso"
                required
              ></v-text-field>

              <v-text-field
                v-model="curso.codigo"
                :counter="10"
                :rules="codigoRules"
                label="Codigo del Curso"
                required
              ></v-text-field>

              <v-container fluid>
                <v-textarea
                  v-model="curso.descripcion"
                  counter
                  label="Descripcion"
                  :rules="descripcionRules"
                  :value="value"
                ></v-textarea>
              </v-container>

              <v-text-field
                v-model="curso.fecha"
                :counter="10"
                :rules="fechaRules"
                label="Fecha del Curso"
                required
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                type="submit"
              >
                Guardar
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

              <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    dialog: false,
    modal: false,
    valid: true,
    curso: {
      name: "",
      descripcion: "",
      costo: null,
      duracion: "",
      cupos: null,
      inscritos: null,
      url: "",
      codigo: "",
      fecha: "",
    },
    value: "Hello!",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
    ],

    descripcionRules: [(v) => v.length <= 25 || "Max 50 characters"],

    costoRules: [(v) => v.length <= 10 || "Max 10 characters"],

    duracionRules: [(v) => v.length <= 10 || "Max 10 characters"],

    cuposRules: [(v) => v.length <= 10 || "Max 10 characters"],

    inscritosRules: [(v) => v.length <= 10 || "Max 10 characters"],

    urlRules: [(v) => v.length <= 200 || "Max 200 characters"],

    codigoRules: [(v) => v.length <= 10 || "Max 10 characters"],

    fechaRules: [(v) => v.length <= 10 || "Max 10 characters"],
  }),
  computed: {
    ...mapState("cursos", {
      cursos: (state) => state.list,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions("cursos", {
      createCurso: "createOne",
      getAllCursos: "getAll",
    }),

    async agregarCurso() {
      if (this.$refs.form.validate()) {
        await this.createCurso({ ...this.curso });
        this.dialog = false;
        await this.getAllCursos();
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style></style>

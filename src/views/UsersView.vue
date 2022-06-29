<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-sheet class="pa-12" elevation="12">
            <h2>Registro de Usuario</h2>
            <v-form ref="formUp" v-model="valid" lazy-validation @submit.prevent="crearCuenta()">
              <v-text-field
                v-model="credenciales.email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="credenciales.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Normal with hint text"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                type="submit"
              >
                Registrar
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset"> Limpiar Formulario </v-btn>

              <v-btn color="warning" @click="resetValidation"> Limpiar Validation </v-btn>
            </v-form>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    valid: true,
    credenciales: {
      password: "",
      email: "",
    },
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),

  methods: {
    ...mapActions("users", ["createUserWithEmailAndPassword"]),
    async crearCuenta() {
      if (this.$refs.formUp.validate()) {
        await this.createUserWithEmailAndPassword(this.credenciales);
      }
      this.$router.push("/CursosView");
    },
    validate() {
      this.$refs.formUp.validate();
    },
    reset() {
      this.$refs.formUp.reset();
    },
    resetValidation() {
      this.$refs.formUp.resetValidation();
    },
  },
  mounted() {
    this.$store.dispatch("users/subscribeToAuthStateChange");
  },
};
</script>

<style></style>

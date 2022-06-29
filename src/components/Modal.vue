<template>
  <v-row justify="center">
    <v-form>
        <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
          <v-card-title>
              <span class="text-h5">Agregando Curso</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Nombre"
                  required
                  v-model="AddCourses.name"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Url del curso"
                  required
                  v-model="AddCourses.url"
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Duracion del curso"
                  required
                  v-model="AddCourses.tiempo"
                ></v-text-field>
              </v-col>
               <v-col
                cols="12"
              >
                <v-text-field
                  label="Codigo del curso del curso"
                  required
                  v-model="AddCourses.codigo"
                ></v-text-field>
              </v-col>
              
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Cupos del curso"
                  required
                  v-model="AddCourses.cupos"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
               <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Inscritos en el curso"
                  required
                  v-model="AddCourses.inscritos"
                ></v-select>
              </v-col>
               <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Costo del curso"
                  required
                  v-model="AddCourses.costo"
                ></v-select>
              </v-col>
               <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Descripcion del curso"
                  required
                  v-model="AddCourses.descripcion"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
          <v-btn color="success" class="mr-4"  @click="dialog = false">
              Agregar
              </v-btn>

              <v-btn color="error" class="mr-4" @click="reset"> Limpiar Formulario </v-btn>

              <v-btn color="warning" @click="resetValidation"> Limpiar Validation </v-btn>
             <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            </v-form>
  </v-row>
</template>

<script>
export default {
    data: () => ({
      dialog: false,
      name:"",
      url:"",
      tiempo:"",
      codigo:"",
      cupos:"",
      inscritos:"",
      costo:"",
      descripcion:""


    }),
     methods: {
    
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  }
</script>
};
</script>

<style></style>

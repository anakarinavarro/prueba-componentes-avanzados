<template>
    <v-container>   
        <h1>Editar Curso</h1>
        <v-row>
            <v-col col="12">

             <v-form
             ref="form"
             v-model="valid"
             lazy-validation
        >
            <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="url"
            :counter="10"
            :rules="urlRules"
            label="Url de la Imagen"
            required
            ></v-text-field>

            <v-text-field
            v-model="cupos"
            :counter="10"
            :rules="cuposRules"
            label="Cupos del Curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="inscritos"
            :counter="10"
            :rules="inscritosRules"
            label="Incritos en el Curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="duracion"
            :counter="10"
            :rules="duracionRules"
            label="Duración del Curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="costo"
            :counter="10"
            :rules="costoRules"
            label="Costo del Curso"
            required
            ></v-text-field>

            <v-text-field
            v-model="codigo"
            :counter="10"
            :rules="codigoRules"
            label="Codigo del Curso"
            required
            ></v-text-field>

            <v-container fluid>
                <v-textarea
            counter
            label="Descripcion"
            :rules="descripcionRules"
            :value="value"
            ></v-textarea>
        </v-container>

            <v-text-field
            v-model="fecha"
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
            >
            Guardar
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            @click="reset"
            >
            Reset Form
            </v-btn>

            <v-btn
            color="warning"
            @click="resetValidation"
            >
            Reset Validation
            </v-btn>
        </v-form>
        </v-col>
       </v-row>
     </v-container>
</template>

<script>
  export default {
      data: () => ({
          valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      descripcion:"",
       descripcionRules: [v => v.length <= 25 || 'Max 50 characters'],
       costo:"",
       costoRules:  [v => v.length <= 10 || 'Max 10 characters'],
      value: 'Hello!',
      duracion:"",
      duracionRules:  [v => v.length <= 10 || 'Max 10 characters'],
      cupos:"",
      cuposRules:  [v => v.length <= 10 || 'Max 10 characters'],
      inscritos: "",
      inscritosRules:  [v => v.length <= 10 || 'Max 10 characters'],
      url: "",
      urlRules: [v => v.length <= 25 || 'Max 50 characters'],
      codigo:"",
      codigoRules: [v => v.length <= 10 || 'Max 10 characters'],
      fecha:"",
      fechaRules:[v => v.length <= 10 || 'Max 10 characters'],
     
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
</script>

<style></style>


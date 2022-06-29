<template>
    <v-container>
      <v-row>
        <v-col cols="12">
           <template>
  <v-data-table
    :headers="headers"
    :items="desserts"

    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>ADMINISTRACION</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        ><Modal class="white pa-6"  />
          <template v-slot:activator="{ on}">
            <v-btn  v-on="on" color="info" v-model="modal"> Agregar Curso
            </v-btn>
          </template>
          
        </v-dialog>
      <!--modal-->
        <v-dialog v-model="dialogDelete" max-width="500px">

          <v-card>
            <v-card-title class="text-h5">Estas seguro de que quieres eliminar este Item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Borrar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
<v-alert
  color="purple"
  outlined
  icon="mdi-account-group"
  type="success"
>Cantidad Total de Alumnos Permitidos: 

</v-alert>

<v-alert
  color="blue"
  icon="mdi-account-multiple-check"
  outlined
  type="success"
>Cantidad Total de Alumnos Inscritos:</v-alert>

<v-alert
  color="red"
  icon="mdi-account-clock"
  outlined
  type="success"
>Cantidad Total de Cupos Restantes:</v-alert>

<v-alert
  color="pink"
  icon="mdi-cancel"
  outlined
  type="success"
>Cantidad Total de Cursos Terminados:</v-alert>

<v-alert
  color="Brown"
  icon="mdi-bell-ring"
  outlined
  type="success"
>Cantidad Total de Cursos Activos:</v-alert>

<v-alert
  color="orange"
  icon="mdi-bell-ring"
  outlined
  type="success"
>Cantidad Total de Cursos:</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </template>

  <script>
  import { mapState, mapActions } from 'vuex'
import Modal from '../components/Modal.vue'
    export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        modal: false,
        headers: [
            {
                text: "Cursos",
                align: "start",
                sortable: false,
                value: "name",
            },
            { text: "Cupos", value: "cupos" },
            { text: "Inscritos", value: "inscritos" },
            { text: "Duración", value: "duracion" },
            { text: "Costo", value: "costo" },
            { text: "Terminado", value: "terminado" },
            { text: "Fecha", value: "fecha" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            name: "",
            cupos: 0,
            inscritos: 0,
            duracion: 0,
            costo: 0,
            terminado: 0,
            fecha: 0,
        },
        defaultItem: {
            name: "",
            cupos: 0,
            inscritos: 0,
            duracion: 0,
            costo: 0,
            terminado: 0,
            fecha: 0,
        },
    }),
    components:{Modal},
    created() {
        this.getAllCursos();
    },
    computed: {
        ...mapState("cursos", {
            curso: (state) => state.list,
            loading: (state) => state.loading
        }),
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        },
    },
    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },
    created() {
        this.initialize();
    },
    methods: {
        ...mapActions("cursos", {
            getAllCursos: "getAll",
        }),
        initialize() {
            this.desserts = [
                {
                    name: "Javascript Avanzado",
                    cupos: "100",
                    inscritos: "20",
                    duracion: "2 meses",
                    costo: "30.000",
                    terminado: "Si",
                    fecha: "06-03-2021",
                },
            ];
        },
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1);
            this.closeDelete();
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem);
            }
            else {
                this.desserts.push(this.editedItem);
            }
            this.close();
        },
    },
    components: { Modal }
}
</script>
  <style></style>
</template>

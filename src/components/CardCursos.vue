<template>
  <v-card width="400">
    <v-img :src="value.img"> </v-img>
    <v-card-text>
      <p class="subtitle-1">{{ value.name }}</p>
      <div class="font-weight-bold ml-8 mb-2">Información</div>

      <v-timeline align-top dense>
        <v-timeline-item color="primary" small>
          <div>
            <div class="font-weight-normal">
              <strong> Costo: {{ value.precio }}</strong
              ><br />
              Duración: {{ value.duracion }}
            </div>
          </div>
        </v-timeline-item>
        <v-timeline-item color="secondary" small>
          <div>
            <div class="font-weight-normal">
              <strong> Cupos: {{ value.cupos }}</strong
              ><br />
              Completado:
              {{ value.terminado ? "si" : "no" }}
            </div>
          </div>
        </v-timeline-item>
        <v-timeline-item color="primary" small>
          <div>
            <div class="font-weight-normal">
              <strong> Fecha: {{ value.fecha }} </strong>
            </div>
          </div>
        </v-timeline-item>
        <v-timeline-item color="secondary" small>
          <div>
            <div class="font-weight-normal">
              <strong> Descripción: {{ value.descripcion }} </strong>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["value"],
};
</script>

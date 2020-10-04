<template>
  <div class="location ml-3">
    <b-row>
      <b-col>
        <label>Location</label>
        <input
          type="text"
          class="form-control"
          placeholder="Hesinki, Finland"
          id="input"
          v-model="locationSearch"
          @change="locationSearch"
        />
      </b-col>
      <b-col md="12" class="w-100">
        <div
          v-for="(tarea, index) in filtroTareas"
          :key="index"
          class="d-none pt-2 ml-3"
          :class="openBusqueda"
        >
          {{ tarea.city | mayuscula }} - {{ tarea.hotelName }}
        </div>
        <template v-if="tarea === ''">
            No hay datos
        </template>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import datosJSON from "@/data/stays.json";

export default {
  name: "Locarion",
  props: {},

  watch: {
    // abrir busqueda
    locationSearch() {
      this.openBusqueda = "d-block";
    },
  },

  data() {
    return {
      // v-model de la busqueda
      locationSearch: "",
      // datos del json
      datos: datosJSON,
    };

  },
  methods: {},
  computed: {
    // buscar las ciudades
    filtroTareas() {
      return this.datos.filter((loca) => {
        return loca.city.includes(this.locationSearch);
      });
    },
  },
  filters: {
    mayuscula(datos) {
      return datos.charAt(0).toUpperCase() + datos.slice(1);
    },
  },
};
</script>
<style>
</style>
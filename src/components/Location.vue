<template>
  <div class="location ml-3">
    <b-row>
      <b-col>
        <label>Location</label>
        <input
          type="text"
          class="form-control"
          placeholder="Punta Cana, Dominican Republic"
          id="input"
          v-model="locationSearch"
        />
      </b-col>
      <b-col md="12" class="w-100">
        <template v-if="locationSearch">
          <div
            v-for="(tarea, index) in filtroTareas"
            :key="index"
            class="pt-2 ml-3"
          >
            {{ tarea.id}}
            <a :href="'#' + tarea.id" class="text-dark">
              <i class="fas fa-map-marker-alt mr-1"></i
              ><b>{{ tarea.city | mayuscula }} - {{ tarea.hotelName }}</b>
            </a>
          </div>
        </template>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Api from '@/Api.js'


export default {
  name: "Location",
  props: {},
  created() {
    // componente api
    Api.traerDatos()
      .then(ok => {
        ok.data.map(res => {
          this.datosApi.push(res)
        })
      })
  },
  data() {
    return {
      // v-model de la busqueda
      locationSearch: "",
      datosApi: [],
    };
  },
  methods: {},
  computed: {
    // buscar las ciudades
    filtroTareas() {
      return this.datosApi.filter((loca) => {
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
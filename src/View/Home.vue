<template>
  <div>
    <b-container>
      <h2><b>Stays in Finland</b></h2>
      <b-row>
        <b-col md="4" class="my-4" v-for="(dato, index) in datos" :key="index">
          <TarjetaVue :datos="dato" :id="index" />
          <!-- ${dato.hotelName.replace(/\s/g, '')}` + '-' + index -->
          <router-link :to="`/hotel/${dato.hotelName.replace(/\s/g, '')}-` + dato.id"
            >Gooo</router-link
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Service from "@/Services/Service.js";
import TarjetaVue from "@/components/Tarjeta.vue";
export default {
  components: {
    TarjetaVue,
  },
  data() {
    return {
      datos: null,
    };
  },

  created() {
    console.log();
    Service.getHoteles("hoteles").then((res) => {
      //   console.log(res, "RESPUESTA");
      this.datos = res.data;
    });
  },
  mounted() {
    this.$root.$refs.Hotel = this;
  },
};
</script>

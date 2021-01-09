<template>
  <div>
    <b-container>
      <h2><b>Stays in Finland</b></h2>
      <div class="text-center">
        <b-spinner class="m-5 loading-rojo" v-if="loading" label="Busy"></b-spinner>
      </div>
      <b-row>
        <b-col
          md="4"
          class="my-4"
          v-for="(dato, index) in datos"
          :key="index"
          @mouseover="show = index"
          @mouseout="show = false"
          :class="{ active: show === index }"
        >
          <router-link :to="`/hotel/${dato.hotelName.replace(/\s/g, '')}-` + dato.id">
            <TarjetaVue :datos="dato" :id="index">
              <template #imagen>
                <b-img-lazy :src="dato.photo" />
              </template>
            </TarjetaVue>
          </router-link>
          <div class="link" v-if="show === index">
            <i class="fas fa-external-link-alt text-primary"></i>
          </div>
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
      loading: false,
      show: false,
    };
  },
  created() {
    this.loading = true;
    Service.getHoteles("hoteles").then((res) => {
      this.loading = false;
      this.datos = res.data;
    });
  },
  mounted() {
    this.$root.$refs.Hotel = this;
  },

  methods: {},
};
</script>
<style scoped>
a {
  text-decoration: none !important;
  color: #2c3e50;
}
.active {
  transition: transform 0.2s;
  transform: scale(1.05);
}
.link {
  position: absolute;
  bottom: 0;
  right: 1.5em;
  padding: 10px;
  border-radius: 30px;
  font-size: 14px;
}
</style>

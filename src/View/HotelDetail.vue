<template>
  <div style="margin-top: 8em">
    <b-container>
      <b-row align-h="center" align-v="center">
        <b-col md="6"
          ><h4>{{ hotel.title }}</h4>
          <b-row class="mt-3">
            <b-col cols="auto"
              ><i class="fas fa-star text-danger mr-1"></i> {{ hotel.rating }}</b-col
            >
            <b-col cols="auto"
              ><i class="fas fa-users text-danger mr-1"></i>{{ hotel.maxGuests }}</b-col
            >
            <b-col cols="auto"
              ><i class="fas fa-map-marker-alt text-danger mr-1"></i>{{ hotel.city }},
              {{ hotel.country }}</b-col
            >
            <b-col cols="12">
                <template v-for="(comentario, index) in hotel.comentarios" >
                   <span :key="index" class="mx-2 d-block">{{index + 1 }}. {{ comentario.fulano }}</span>
                </template>
            </b-col>
            <b-col cols="12" class="mt-3">
                <button class="btn btn-sm boton_one px-3">Hospedarme</button>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6">
          <img :src="hotel.photo" style="border-radius:10px" class="w-100" alt="" />
        </b-col>
      </b-row>

      <div class="text-center mt-4 pt-4">
        <router-link to="/" class="text-dark">
          <i class="fas fa-home mr-1"></i>Volver al inicio</router-link
        >
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  mounted() {},
  created() {
    this.hotel = this.$root.$refs.Hotel.datos.find((hotel) => {
      let select = hotel.hotelName.replace(/\s/g, "") + "-" + hotel.id;
      return select === this.$route.params.id;
    });
  },
  data() {
    return {
      hotel: null,
    };
  },
};
</script>

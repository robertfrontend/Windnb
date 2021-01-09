<template>
  <div>
    <h1>Detalle Hotel</h1>
    {{ hotel }}
  </div>
</template>

<script>
export default {
  mounted() {},
  created() {
    this.hotel = this.$root.$refs.Hotel.datos.find((hotel) => {
    //   console.log(hotel.hotelName + "-" + hotel.id);
      return hotel.hotelName + "-" + hotel.id === this.$route.params.id;
    });
    console.log(this.hotel);
  },
  data() {
      return {
          hotel: null
      }
  }
};
</script>

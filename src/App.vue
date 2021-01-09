<template>
  <div id="app">
    <Header @datosHeader="eventoHeader" />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      guest: 0,

      datoGuest: 0,
    };
  },
  methods: {
    eventoHeader(datos) {
      console.log("datos busqueda", datos);
      this.guest = datos;
      this.datoGuest = this.guest;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}

.loading-rojo{
  color: #eb5757;
}

.boton_one {
  background: #eb5757 !important;
  border: none;
  color: white !important;
  cursor: pointer;
}
</style>

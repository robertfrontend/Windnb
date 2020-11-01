<template>
  <section class="pt-4">
    <h2><b>Stays in Finland</b></h2>
    <b-row class="pt-4 pl-2">

      <tarjeta v-for="(dato) in datosApi" :key="dato.id" :id="dato.id" >
        <template #img>
            <b-img-lazy :src="dato.photo" />
        </template>
        <template #namelink>
            HOST NAME
        </template>
        <template #type>
          {{ dato.type }}
        </template>
        <template #rating>
          {{ dato.rating }}
        </template>
        <template #nameHotel>
          {{ dato.hotelName  }}
        </template>
        <template #city>
          {{ dato.city  }}
        </template>
        <template #country>
          {{ dato.country  }}
        </template>
      </tarjeta>

    </b-row>
  </section>
</template>
<script>

import Api from '@/Api.js'
import Tarjeta from '@/components/Tarjeta.vue'

export default {
  name: "SectionList",
  components: {
    Tarjeta
  },
  created() {
    // componente api
    Api.traerDatos()
      .then(ok => {
        ok.data.map(res => {
          console.log(res);
          this.datosApi.push(res)
        })
      })
  },

  data() {
    return {
      datosApi: [],
    };
  },
};
</script>
<style >

</style>

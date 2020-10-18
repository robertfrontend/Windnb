<template>
  <section class="pt-4">
    <h2><b>Stays in Finland</b></h2>
    <b-row class="pt-4 pl-2">

      <b-col lg="4" md="6" sm="12" class="mb-4 tarjeta mt-2" 
        v-for="dat in datos" :key="dat.photo">
        <div class="img_tarject">
            <b-img-lazy
              :src="dat.photo"
              :alt="dat.title"
            />
        </div>
        <b-row class="pt-3 px-4 justify-content-between">
          <div class="">
            <a href="#">SUPER HOST</a>
          </div>
          <div>
            <p class="ml-n4" style="color:#828282;"> {{dat.type}} </p>
          </div>
          <div class="d-flex">
            <i class="fas fa-star text-danger mt-1 mr-1"></i>
            <p class=""> {{ dat.rating }} </p>
          </div>
          <div class="col-12 pt-0 mt-n1">
                <p class="m-0 ml-n2" style="font-weight:500;"> 
                  {{dat.title}} <br>
                  Hotel name: <span class="text-primary">{{ dat.hotelName }}</span> <br>
                  Country: <span class="text-success">{{ dat.country }}</span> 
                </p>
          </div>
        </b-row>
      </b-col>

    </b-row>
 
  </section>
</template>
<script>

import datosJSON from '@/data/stays.json'

export default {
  name: "SectionList",
  mounted() {

  },

  data() {
    return {
        datos: datosJSON,
    };
  },
};
</script>
<style >
.tarjeta img {
  width: 100%;
  height: 40vh;
  border-radius: 24px;
  object-fit: cover;
}
.desc i {
    margin: 0;
    width: 14px !important;
    font-size: 14px !important;
    color: white;
}
.tarjeta a { 
    border: 1px solid #4F4F4F;
    border-radius: 12px;
    padding: 2px 5px;
    color:  #4F4F4F;
    font-size: 12px;
    text-decoration: none;
}
</style>

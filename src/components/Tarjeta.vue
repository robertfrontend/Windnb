<template>
  <div class="tarjeta">
    <div class="img_tarject">
        <slot name="imagen"></slot>
    </div>
    <b-row class="pt-3 px-4 justify-content-between">
      <div class="">
        <slot name="namelink"> SUPER HOST </slot>
      </div>
      <div>
        <p class="ml-n4" style="color: #828282">
          {{ datos.type }}
        </p>
      </div>
      <div class="d-flex">
        <i class="fas fa-star text-danger mt-1 mr-1"></i>
        <p class="">
          {{ datos.rating }}
        </p>
      </div>
      <div class="col-12 pt-0 mt-n1">
        <p class="m-0 ml-n2" style="font-weight: 500">
          Hotel name:
          <span class="text-primary">
            {{ datos.hotelName }}
          </span>
          <br />
          City:
          <span class="text-danger">
            {{ datos.city }}
          </span>
          <br />
          Country:
          <span class="text-success"> {{ datos.country }} </span>
        </p>
      </div>
      <!-- /${datos.hotelName.replace(/\s/g, '')}/` + id -->

    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    datos: Object,
    id: Number,
  },

  data() {
    return {
      datosOk: this.datos
    };
  },
  methods: {},
};
</script>
<style>
.tarjeta img {
  width: 100%;
  height: 25vh;
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
  border: 1px solid #4f4f4f;
  border-radius: 12px;
  padding: 2px 5px;
  color: #4f4f4f;
  font-size: 12px;
  text-decoration: none;
}
</style>

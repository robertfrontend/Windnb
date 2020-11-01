<template>
  <b-col lg="4" md="6" sm="12" class="mb-4 tarjeta mt-2">
    <div class="img_tarject">
      <slot name="img">
        <b-img-lazy
          src="https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995_960_720.jpg"
        />
      </slot>
    </div>
    <b-row class="pt-3 px-4 justify-content-between">
      <div class="">
          <slot name="namelink"> SUPER HOST </slot>
      </div>
      <div>
        <p class="ml-n4" style="color: #828282">
          <slot name="type"> .... </slot>
        </p>
      </div>
      <div class="d-flex">
        <i class="fas fa-star text-danger mt-1 mr-1"></i>
        <p class="">
          <slot name="rating">....</slot>
        </p>
      </div>
      <div class="col-12 pt-0 mt-n1">
        <p class="m-0 ml-n2" style="font-weight: 500">
          Hotel name:
          <span class="text-primary">
            <slot name="nameHotel">....</slot>
          </span>
          <br />
          City:
          <span class="text-danger">
            <slot name="city">....</slot>
          </span>
          <br />
          Country:
          <span class="text-success"> <slot name="country">....</slot></span>
        </p>
      </div>
    </b-row>
  </b-col>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
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
  border: 1px solid #4f4f4f;
  border-radius: 12px;
  padding: 2px 5px;
  color: #4f4f4f;
  font-size: 12px;
  text-decoration: none;
}
</style>
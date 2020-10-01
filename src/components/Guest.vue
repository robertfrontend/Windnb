<template>
  <div class="guest ml-3" :class="openGuest">
      <b-row class="mt-4">
        <b-col md="12" class="pb-4 pl-4">
          <a href="#" class="text-dark">
            Adultos
          </a>
        </b-col>
        <b-col md="12" class="pb-4 pl-4">
          <a href="#" class="text-dark">
            Adultos
          </a>
        </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
  name: "Guest",
  props: {
    openGuest: String
  },
  data() {
    return {

    };
  },
}
</script>
<style>
.guest {
  display: none;
}
.openGuest{
  display: block;
  transition: ease-in-out .2s;
}
</style>
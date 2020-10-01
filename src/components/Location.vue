<template>
  <div class="location ml-3" :class="openLocation">
      <b-row class="mt-4">
        <b-col md="12" class="pb-4 pl-4">
          <a href="#" class="text-dark">
            <i class="fas fa-map-marker-alt mr-1"></i> Helsinki, Finland
          </a>
        </b-col>
        <b-col md="12" class="pb-4 pl-4">
          <a href="#" class="text-dark">
            <i class="fas fa-map-marker-alt mr-1"></i> Tuku, Finland
          </a>
        </b-col>
      </b-row>
  </div>
</template>
<script>
export default {
  name: "Locarion",
  props: {
    openLocation: String
  },
  data() {
    return {};
  },
};
</script>
<style>
.location{
  display: none;
}
.openLocation{
  display: block;
}
</style>
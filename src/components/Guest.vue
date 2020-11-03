<template>
  <div class="guest ml-3">
    <b-row>
      <b-col >
        <label>GUESTS</label>
        <input
          type="text"
          class="form-control"
          placeholder="Add guests"
          id="input"
          disabled

        />
      </b-col>
      <b-col md="12" class="w-100">
        <b-row>
          <b-col cols="12" class="ml-3">
            <b>Adults</b>
            <p class="text-secondary">Ages 13 or above</p>
          </b-col>
          <b-col cols="12" class="ml-3">
            <div class="d-flex flex-row">
              <div>
                <a class="btn btn-sm btn-outline-dark" @click="restarAdultos">-</a>
              </div>
              <div class="mx-2 mt-1">
                <b> {{ edadAdultos }} </b>
              </div>
              <div>
                <a class="btn btn-sm btn-outline-dark" @click="sumarAdultos">+</a>
              </div>
            </div>
          </b-col>
          <b-col cols="12" class="ml-3 mt-4">
            <b>Children</b>
            <p class="text-secondary">Ages 2-12</p>
          </b-col>
          <b-col cols="12" class="ml-3">
            <div class="d-flex flex-row">
              <div>
                <a class="btn btn-sm btn-outline-dark" @click="restarChildren">-</a>
              </div>
              <div class="mx-2 mt-1">
                <b> {{ edadChildren }} </b>
              </div>
              <div>
                <a class="btn btn-sm btn-outline-dark" @click="sumarChildren">+</a>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Guest",
  props: {},
  data() {
    return {
      edadAdultos: 0,
      edadChildren: 0,
    };
  },
  methods: {

    sumarAdultos() {
      this.edadAdultos++;
    },
    restarAdultos() {
      if (this.edadAdultos > 0) {
        this.edadAdultos--;
      }
    },

    sumarChildren() {
      this.edadChildren++;
    },
    restarChildren() {
      if (this.edadChildren > 0) {
        this.edadChildren--;
      }
    },
  },
};
</script>

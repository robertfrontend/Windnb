<template>
  <div class="header">
    <header class="pt-4">
      <b-container>
        <b-row class="pl-4 pr-4">
          <b-col>
           <router-link to="/"> <img src="@/assets/logo.svg" alt="" /></router-link>
          </b-col>

          <b-col lg="6" md="12" sm="12">
            <div class="input-group mb-3 m-0" id="pad" @click="abrirMenu">
              <div class="input-group-prepend inicio">
                <span class="input-group-text">Helsinki, Island</span>
              </div>
              <b-input
                type="text"
                class="form-control search"
                placeholder="Add guests"
              />
              <div class="input-group-prepend final">
                <span class="input-group-text">
                  <i class="fas fa-search text-danger"></i>
                </span>
              </div>
            </div>
          </b-col>

          <div class="div_oculto" :class="divOculto">
            <div class="bg-light w-100 text-right pt-2 pr-2 pt-md-5 pr-md-5">
              <i
                class="fas fa-times text-danger"
                style="font-size: 30px; cursor: pointer"
                @click="ocultar"
              ></i>
            </div>

            <div class="hijo_oculto">
              <b-container>
                <b-row>
                  <b-col lg="4" class="text-left">
                    <Location />
                  </b-col>

                  <b-col lg="4" class="text-left">
                    <b-row>
                      <b-col>
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
                                <a
                                  class="btn btn-sm btn-outline-dark"
                                  @click="restarAdultos"
                                  >-</a
                                >
                              </div>
                              <div class="mx-2 mt-1">
                                <b> {{ edadAdultos }} </b>
                              </div>
                              <div>
                                <a
                                  class="btn btn-sm btn-outline-dark"
                                  @click="sumarAdultos"
                                  >+</a
                                >
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
                                <a
                                  class="btn btn-sm btn-outline-dark"
                                  @click="restarChildren"
                                  >-</a
                                >
                              </div>
                              <div class="mx-2 mt-1">
                                <b> {{ edadChildren }} </b>
                              </div>
                              <div>
                                <a
                                  class="btn btn-sm btn-outline-dark"
                                  @click="sumarChildren"
                                  >+</a
                                >
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-col>

                  <b-col lg="4" class="text-center mt-4 mb-4">
                    <button class="boton_one btn btn-sm px-2" @click="buscar">
                      <i class="fas fa-search"></i>
                      Search
                    </button>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </div>
        </b-row>
      </b-container>
    </header>
  </div>
</template>
<script>
import Location from "./Location";
// import Guest from "./Guest";

export default {
  name: "Header",
  components: {
    Location,
    // Guest,
  },
  data() {
    return {
      openLocation: "",
      divOculto: "div_oculto",


      // Guest propiedades
      edadAdultos: 0,
      edadChildren: 0,

      invitados:0,
    };
  },
  methods: {
    buscar() {
      this.invitados = this.edadAdultos + this.edadChildren
      this.$emit('datosHeader', this.invitados)
      // console.log(this.invitados);
      this.divOculto = "div_oculto"
    },

    // open menu
    abrirMenu() {
      this.divOculto = "openMenu";
    },
    ocultar() {
      this.divOculto = "";
    },

    // Guest Methods
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
<style>
#pad {
  width: 70%;
  float: right;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
}

#pad input {
  background: white;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  border-left: 1px solid #f2f2f2;
  padding-top: 12px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}
@media (max-width: 768px) {
  #pad {
    width: 100%;
    padding-top: 20px;
  }
}

#input {
  background: white;
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid transparent;
}
#input:focus {
  border: 1px solid black;
}
#pad input::placeholder {
  color: #bdbdbd !important;
}

#pad input:active {
  outline: none;
}

#pad span {
  background: transparent;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
}

.final {
  border-left: 1px solid #f2f2f2;
}

.div_oculto {
  position: fixed;
  top: 0vh;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  background: rgba(0, 0, 0, 0.479);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  visibility: hidden;
}

.hijo_oculto {
  background: white;
  width: 100%;
  height: 0vh;
  padding-bottom: 10em;
}

@media (max-width: 768px) {
  .hijo_oculto {
    padding-top: 1em;
  }
}
.openMenu {
  top: 0vh;
  height: 100vh;
  opacity: 1;
  visibility: visible;
}
.openMenu > .hijo_oculto {
  height: auto;
}
</style>
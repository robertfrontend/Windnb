<template>
  <div class="header">
    <header class="pt-4">
      <b-container>
        <b-row class="pl-4 pr-4">
          <b-col>
            <img src="@/assets/logo.svg" alt="" />
          </b-col>
          <b-col md="6">
            <div class="input-group mb-3 m-0" id="pad" @click="abrirMenu">
              <div class="input-group-prepend inicio">
                <span class="input-group-text">Helsinki, Island</span>
              </div>
              <input
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
          
          <div class="div_oculto">
            <div class="hijo_oculto">
                <b-container>
                    <b-row>
                        <b-col class="text-left">
                        <label>Location</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Hesinki, Finland"
                            id="input"
                        />
                        </b-col>
                        <b-col class="text-left">
                        <label>GUESTS</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Add guests"
                            id="input2"
                        />
                        </b-col>
                        <b-col class="text-center mt-4">
                            <button class="btn btn-danger">
                                <i class="fas fa-search"></i>
                                Search
                            </button>
                        </b-col>
                    </b-row>
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
                        <b-col md="12" class="pb-4 pl-4">
                            <a href="#" class="text-dark">
                                <i class="fas fa-map-marker-alt mr-1"></i> Oulu, Finland
                            </a>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div class="text-center mt-2 pt-2">
                <button  @click="ocultar" class="btn btn-danger">
                    <i class="fas fa-times"></i>
                    Close
                </button>
            </div>
          </div>
        </b-row>
      </b-container>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
    };
  },
  methods: {
    // open menu
    abrirMenu() {
      document.querySelector(".div_oculto").classList.toggle("openMenu");
    },
    ocultar() {
        document.querySelector(".div_oculto").classList = 'div_oculto'
    }
  },
};
</script>
<style>
button {
    background: #EB5757 ;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}
#pad {
  width: 70% !important;
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

#input {
  background: white;
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  border-radius: 10px;
}

#input2 {
  background: white;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  padding-top: 12px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
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

.inicio {
}

.final {
  border-left: 1px solid #f2f2f2;
}

.div_oculto {
  position: fixed;
  top: -100vh;
  left: 0;
  width: 100%;
  height: 0vh;
  opacity: 0;
  background: rgba(0, 0, 0, 0.479);
  z-index: 10;
  transition: ease 0.2s;
}

.hijo_oculto{
    background: white;
    padding-top: 4em;
    height: 60vh;
    transition: ease 0.2s;
}
.openMenu {
  top: 0vh;
  height: 100vh;
  opacity: 1;
  transition: ease 0.2s;

}
</style>
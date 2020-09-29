<template>
  <section class="pt-4">
    <h2><b>Stays in Finland</b></h2>
    <div class="row pt-4 pl-2">

      <div class="tarjeta">
        <div class="img_tarject">
          <img
            src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
            alt=""
          />
        </div>
        <div class="row pt-3 px-4 justify-content-between">
          <div class="">
            <a href="#">SUPER HOST</a>
          </div>
          <div>
            <p class="ml-n4" style="color:#828282;">Entire apartment .2beds</p>
          </div>
          <div class="d-flex">
            <i class="material-icons text-danger mt-n1 mr-1">star_rate</i>
            <p class="">4.40</p>
          </div>
          <div class="col-12 pt-0 mt-n1">
            <p class="m-0 ml-n2" style="font-weight: 500;">Stylist apartment in center of the city</p>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>
<script>
export default {
  name: "SectionList",
  mounted() {
      fetch(this.url)
        .then(respuesta => {
            return respuesta.city
        })
        .then(res => console.log(res))
        .catch(error => console.error(error))
  },
  data() {
    return {
        url: '@/data/stays.json',

        datos: []
    };
  },
};
</script>
<style >
.tarjeta {
  width: 30%;
  margin: 10px auto;
  font-size: 12px;
}
.tarjeta img {
  width: 100%;
  border-radius: 24px;
}

.desc{
    width: 100%;
    text-align: left;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
    margin: 0;
}
.desc i {
    margin: 0;
    font-size: 15px;
}
.tarjeta a { 
    border: 1px solid #4F4F4F;
    border-radius: 12px;
    padding: 2px 5px;
    color:  #4F4F4F;
    font-size: 12px;
}
</style>

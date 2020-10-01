<template>
  <div id="app">
    <Header />
    <div class="container">
      <SectionList />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SectionList from '@/components/SectionList.vue'


export default {
  name: 'App',
  components: {
    Header,
    SectionList
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
}

.boton_one{
  background: #eb5757;
  border: none;
  color: white;
  padding: 12px 30px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 16px;
}
</style>

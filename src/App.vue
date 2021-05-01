<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "../src/global/Header";
import Footer from "../src/global/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0px;
}
.container {
  width: 100%;
  margin: 0px;
}
</style>

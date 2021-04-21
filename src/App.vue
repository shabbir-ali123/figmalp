<template>
  <div id="app">
    <Header />
    <Home />
    <Agency />
    <Services />
    <Work />
    <Clients />
    <Industries />
    <Searching />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Agency from "./components/Agency.vue";
import Services from "./components/Services.vue";
import Work from "./components/Work.vue";
import Clients from "./components/Clients.vue";
import Industries from "./components/Industries.vue";
import Searching from "./components/Searching.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Agency,
    Services,
    Work,
    Clients,
    Industries,
    Searching,
    Footer,
  },
};
</script>

<style>
#App {
  height: auto;
  width: 100%;
}
.container {
  width: 100%;
  margin: 0px;
}
</style>

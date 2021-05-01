<template>
  <div id="Home">
    <Front />
    <Agency />
    <Services />
    <Work />
    <Clients />
    <Industries />
    <Searching />
  </div>
</template>

<script>
import Front from "../Home/components/Front";
import Agency from "../Home/components/Agency.vue";
import Services from "../Home/components/Services.vue";
import Work from "../Home/components/Work.vue";
import Clients from "../Home/components/Clients.vue";
import Industries from "../Home/components/Industries.vue";
import Searching from "../Home/components/Searching.vue";

export default {
  name: "Home",
  components: {
    Front,
    Agency,
    Services,
    Work,
    Clients,
    Industries,
    Searching,
  },
};
</script>

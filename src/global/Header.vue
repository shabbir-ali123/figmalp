<template>
  <div class="topnav" id="myTopnav">
    <a> <img @click="toggle" src="./assets/img/brand.png" alt=""/></a>
    <div class="menu__items" v-if="active">
      <a><router-link to="/Home"> Web Design </router-link></a>
      <a><router-link to="/Service"> Automation </router-link></a>
      <a
        ><router-link to="/Service__detail">
          SEO & Lead Generation
        </router-link></a
      >
      <a><router-link to="/"> Social Media Marketing </router-link></a>
      <a><router-link to="/"> Pricing</router-link> </a>
      <a><router-link to="/"> Indutries served </router-link></a>
      <a><router-link to="/"> Case Studies </router-link></a>
      <a><router-link to="/"> Login </router-link></a>
      <a><button>GET STARTED</button></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>
<style>
.topnav {
  overflow: hidden;
  margin-left: 70px;
  position: fixed;
  background-color: white;
  height: 90px;
}

.topnav a {
  float: left;
  justify-content: center;
  align-items: center;
  display: flex;
  color: black;
  text-align: center;
  padding: 20px 5px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a img {
  margin-top: 0px;
}
.topnav a button {
  background: #3366ff;
  border-radius: 42px;
  width: 114px;
  height: 36px;
  outline: none;
  border: none;
  color: white;
  margin-top: 20px;
}

@media screen and (max-width: 600px) {
  .topnav {
    background-color: #333;
    margin-left: 0px;
    position: relative;
    height: auto;
  }
  .topnav a {
    float: none;
    display: block;
    text-align: left;
    padding: 10px 10px;
    color: white;
  }
}
</style>

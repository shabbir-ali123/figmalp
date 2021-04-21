<template>
  <div class="Header ">
    <div class="menu__wrapper">
      <img class="brand" src="../assets/img/brand.png" alt="" srcset="" />
      <div class="Menu__items container">
        <select class="Item">
          <option value="">Web Design</option>
        </select>
        <select class="Item">
          <option value="">Automation</option>
        </select>
        <select class="Item">
          <option value="">SEO & Lead Generation</option>
        </select>
        <select class="Item">
          <option value="">Social Media Marketing</option>
        </select>
        <a class="Item">Pricing</a>
        <a class="Item">Industries served</a>
        <a class="Item">Case Studies</a>
        <a class="Item">Login</a>
        <button>GET STARTED</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu__wrapper {
  background-color: white;
  height: 100px;
  position: fixed;
  margin-top: -10px;
}
.Menu__items {
  margin-top: -37px;
  /* background-color: aquamarine; */
  height: 50px;
  width: 100%;
  right: 385px;
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  top: 35px;
  padding-top: 50px;
  margin-left: 185px;
}
.brand {
  margin-left: 96px;
  margin-top: 13px;
  position: fixed;
}
.Menu__items .Item {
  text-decoration: transparent;
  padding: 10px;
}
button {
  width: 114px;
  height: 36px;
  top: 0.5px;
  left: 955px;
  color: #ffffff;
  border: none;
  background: #3366ff;
  border-radius: 42px;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
}
select {
  padding-bottom: 120px;
  border: none;
}
</style>

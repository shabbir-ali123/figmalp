<template>
  <div class="search__wrapper container">
    <div class="search__content">
      <img src="../assets/img/dot.png" alt="" srcset="" />
      <h2>
        Your next customer is searching. <br />
        Make sure they find you.
      </h2>
      <button>Get started</button>
    </div>
  </div>
</template>
<style scoped>
.search__wrapper {
  height: auto;
  background-color: #3366ff;
}
.search__wrapper .search__content {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 50px;
}
.search__content h2 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 63px;
  /* or 157% */

  text-align: center;

  color: #ffffff;
}
.search__content button {
  background: #ffffff;
  border-radius: 45px;
  width: 177px;
  height: 46px;
  border: none;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;

  color: #000000;
  cursor: pointer;
}
</style>

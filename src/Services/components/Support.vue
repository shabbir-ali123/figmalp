<template>
  <div class="support__wrapper">
    <div class="support___content">
      <div class="one">
        <img src="../assets/img/115.png" alt="" />
      </div>
      <div class="two">
        <img src="../assets/img/115.png" alt="" />
      </div>
    </div>
    <div class="detail__wrapper">
      <div class="wrapp">
        <img src="../assets/img/151.png" alt="" />
        <h3>24/7 support</h3>
      </div>
      <div class="wrapp">
        <img src="../assets/img/151.png" alt="" />
        <h3>24/7 support</h3>
      </div>
      <div class="wrapp">
        <img src="../assets/img/151.png" alt="" />
        <h3>24/7 support</h3>
      </div>
    </div>
    <img class="three" src="../assets/img/115.png" alt="" />
  </div>
</template>
<style scoped>
.support__wrapper {
  height: auto;
  background-color: #3366ff;
  background-image: url("../assets/img/111.png");
}
.support___content {
  display: flex;
  justify-content: space-around;
}

.three {
  padding-left: 150px;
  margin-top: 40px;
  padding-bottom: 5px;
}
.detail__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 50px;
  text-align: center;
}
.support__wrapper h3 {
  height: auto;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  /* identical to box height, or 92% */

  color: #ffffff;
}
</style>

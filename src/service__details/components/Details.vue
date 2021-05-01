<template>
  <div class="detail__wrapper">
    <div class="detail__content">
      <div class="data__wrapper">
        <h2>Need SEO to maximize conversions</h2>
        <p>
          Our developers have over 15+ years of web design and software
          development experience to help you create a custom solution that meets
          your requirements
        </p>
        <button>get started</button>
      </div>
      <div class="detail__img">
        <div class="img__one">
          <img src="../assets/img/1.png" alt="" />
        </div>
        <div class="img__two">
          <img src="../assets/img/2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.detail__content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #edeefce5;
}
.detail__content .data__wrapper {
  margin-top: 100px;
  padding-left: 100px;
}
.detail__img {
  display: flex;
  align-items: center;
  background-image: url("../assets/img/111.png");
}

.detail__img .img__two img {
  margin-left: 20px;
  margin-top: 105px;
  padding-right: 10px;
}
.detail__img .img__one img {
  margin-top: 95px;
}
.detail__content .data__wrapper h2 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  /* or 121% */

  color: #1c304b;
}
.detail__content .data__wrapper p {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;

  color: #1c304b;
}
</style>

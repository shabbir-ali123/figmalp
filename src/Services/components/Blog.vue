<template>
  <div class="blog__wrapper">
    <div class="blog__content">
      <h2>Recent Blog</h2>
    </div>
    <div class="blog__card">
      <div class="card">
        <img src="../assets/img/161.png" alt="" />
        <h4>02 April 2021</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div class="card">
        <img src="../assets/img/162.png" alt="" />
        <h4>02 April 2021</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div class="card">
        <img src="../assets/img/163.png" alt="" />
        <h4>02 April 2021</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.blog__wrapper {
  text-align: center;
}
.blog__content h2 {
  height: 53px;
  padding-top: 30px;
  padding-bottom: 30px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 53px;

  color: #1c304b;
}
.blog__card {
  /* width: 404px; */
  display: flex;
  justify-content: center;
}
.blog__card .card {
  padding-left: 10px;
}
.blog__card h4 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 19px;
  /* text-align: center; */

  color: #6d6d6d;
}
.blog__card p {
  height: 51px;
  text-align: center;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 24px;
  /* or 114% */

  /* text-align: center; */

  color: #2b3945;
}
</style>

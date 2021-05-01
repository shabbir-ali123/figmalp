<template>
  <div class="recent__wrapper">
    <div class="main__wrapper">
      <div class="content__wrapper">
        <div class="detail__wrapper">
          <h2>Recent work</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            sed do eiusmod Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <div class="case">
          <h2>case studies</h2>
          <img src="../assets/img/13.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.recent__wrapper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/img/160.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.content__wrapper {
  display: flex;
  justify-content: space-around;
  padding-top: 550px;
}
.case {
  display: flex;
  align-items: center;
}
.case h2 {
  height: 19px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  text-transform: uppercase;

  color: #ffffff;
}
.case img {
  width: 15px;
  height: 10px;

  padding-left: 10px;
}
.recent__wrapper .detail__wrapper h2 {
  height: 53px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 53px;

  color: #ffffff;
}
.recent__wrapper .content__wrapper p {
  height: 126px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;

  color: #ffffff;
}
</style>

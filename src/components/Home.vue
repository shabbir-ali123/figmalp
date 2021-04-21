<template>
  <div class="Home__wrapper container">
    <div class="content__wrapper ">
      <div class="detail__wrapper">
        <h2>Web Design By Professionals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
        </p>
        <button>GET STARTED</button>
      </div>
      <div class="rec">
        <img src="../assets/img/dot.png" alt="" srcset="" />
      </div>
      <div class="dot">
        <img src="../assets/img/111.png" alt="" srcset="" />
      </div>
      <div class="image__wrapper">
        <img src="../assets/img/1.png" alt="" srcset="" />
      </div>
    </div>
    <div class="logo">
      <img src="../assets/img/2.png" alt="" srcset="" />
      <img src="../assets/img/3.png" alt="" srcset="" />
      <img src="../assets/img/4.png" alt="" srcset="" />
      <img src="../assets/img/3.png" alt="" srcset="" />
      <img src="../assets/img/4.png" alt="" srcset="" />
      <img src="../assets/img/4.png" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rec {
  width: 40px;
  height: 100px;
  margin-left: 615px;
  margin-bottom: 180px;
  /* padding-top: 230px; */
  transform: rotate(-90deg);
}
.dot {
  width: 500px;
  height: 420px;
  margin-top: 100px;
  margin-right: 240px;
}
.content__wrapper {
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  line-height: 15px;
}
.image__wrapper img {
  width: 600px;
  margin-left: -720px;
  /* height: 408px; */
  margin-top: 125px;
  /* margin-right: 40px; */
}
.detail__wrapper h2 {
  position: absolute;
  width: 371px;
  height: 280px;
  left: 130px;
  top: 128px;

  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 61px;
  /* or 121% */

  color: #1c304b;
}
.detail__wrapper p {
  position: absolute;
  width: 443px;
  height: 81px;
  left: 130px;
  top: 295px;

  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;

  color: #1c304b;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  margin-top: 50px;
  margin-left: 90px;
}
button {
  outline: none;
  position: absolute;
  width: 177px;
  height: 46px;
  left: 255px;
  top: 440px;

  background: #3366ff;
  border-radius: 42px;
  color: #ffffff;
  border: none;
  cursor: pointer;
}
</style>

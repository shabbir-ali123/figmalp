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
.content__wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  line-height: 15px;
}
@media (max-width: 950px) {
  .content__wrapper {
    flex-direction: column;
    /* padding-top: 200px; */
  }
  .detail__wrapper {
    padding-right: 83px;
  }
  .image__wrapper {
    margin-left: 0px;
  }
  .content__wrapper .image__wrapper img {
    width: 100%;
    margin-top: 50px;
  }
  .logo {
    width: 100%;
    flex-wrap: wrap;
  }
}
.image__wrapper img {
  /* height: 408px; */
  margin-top: 155px;
  /* padding-right: 60px; */
  margin-right: 40px;
}
.detail__wrapper h2 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 61px;
  /* or 121% */

  color: #1c304b;
}
.detail__wrapper {
  margin-top: 30px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;
  margin-left: 90px;
  color: #1c304b;
}
.logo {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  margin-top: 50px;
}
button {
  outline: none;
  margin-top: 20px;
  width: 177px;
  height: 46px;
  background: #3366ff;
  border-radius: 42px;
  color: #ffffff;
  border: none;
  cursor: pointer;
}
</style>

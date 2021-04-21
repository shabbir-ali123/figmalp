<template>
  <div class="work__wrapper">
    <div class="work__content container">
      <div class="work__detail">
        <h2>Work we’re proud of</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do
          eiusmod tempor incididunt
        </p>
        <button>get started</button>
        <a href="#">View more case studies</a>
        <img src="../assets/img/arrow.png" alt="" srcset="" />
      </div>
      <div class="work__img">
        <div class="img__one">
          <img src="../assets/img/8.png" alt="" srcset="" />
        </div>
        <div class="img__two">
          <img src="../assets/img/7.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.work__wrapper {
  background: #f9f9f9;
  height: auto;
}
.work__content {
  /* height: 100vh; */
  height: auto;
  display: flex;
  margin-top: 100px;
  position: relative;
  padding-top: 110px;
  padding-bottom: 100px;
}
.work__detail {
  padding-top: 20px;
  text-align: start;
  width: 400px;
  margin-left: 120px;
  /* margin-bottom: 90px; */
}
.work__detail img {
  padding-left: 8px;
}
.work__detail button {
  width: 140px;
  height: 45px;
  color: #ffffff;
  text-transform: uppercase;
  outline: none;
  border: none;
  margin-top: 20px;
  margin-right: 20px;
  background: #3366ff;
  border-radius: 36px;
}
.work__detail p {
  font-family: Segoe UI;
  font-size: 20px;
  font-style: normal;
  font-weight: 350;
  line-height: 27px;
  letter-spacing: 0em;
  color: #6d6d6d;
}
.work__detail h2 {
  font-family: Segoe UI;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: 0em;
  color: #1c304b;
}
.work__img {
  margin-left: 210px;
  display: flex;
  align-items: center;
}
.work__img .img__one {
  margin-top: 20px;
  width: 200px;
}
.work__img .img__one img {
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  border-top: 2px solid gray;
}
.work__img .img__two {
  border-top: rgba(0, 0, 0, 0.25);
  /* padding-top: -250px; */
}
.work__img .img__two img {
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
  border-top: 2px solid gray;
}
.work__detail a {
  font-family: Segoe UI;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  color: #3366ff;
}
</style>

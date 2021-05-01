<template>
  <div class="book__wrapper">
    <div class="img">
      <img class="one" src="../assets/img/115.png" alt="" />
      <img class="two" src="../assets/img/115.png" alt="" />
    </div>
    <div class="book__content">
      <h3>Ready to speak with an web design expert book a call with us</h3>
      <button>BOOK NOW!</button>
    </div>
  </div>
</template>
<style scoped>
.book__wrapper {
  background-color: #3366ff;
  background-image: url("../assets/img/111.png");
  height: auto;
}
.book__wrapper .img {
  display: flex;
  justify-content: space-between;
}
/* .book__wrapper .img .one {
  margin-left: 80px;
}
.book__wrapper .img .two {
  margin-right: 80px;
} */
.book__wrapper .book__content {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
.book__content h3 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 40px;
  /* or 242% */
  padding-right: 20px;
  color: #ffffff;
}
.book__content button {
  width: 177px;
  height: 46px;
  outline: none;
  border: none;
  background: #ffffff;
  border-radius: 42px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;

  color: #000000;
  margin-top: 25px;
}
</style>

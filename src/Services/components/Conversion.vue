<template>
  <div class="conversion__wrapper">
    <div class="conversion__content">
      <div class="conversion__detail">
        <h2>Need a website designed to maximize conversions</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button>get started</button>
      </div>
      <div class="img__wrapper">
        <div class="img__2">
          <img src="../assets/img/dot.png" alt="" />
        </div>
        <div class="img__1">
          <img src="../assets/img/ux.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.conversion__content {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #edeefce5;
  padding-top: 120px;
}
.conversion__detail {
  margin-left: 50px;
}
.conversion__detail h2 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 63px;
  /* or 121% */

  color: #1c304b;
}
.conversion__detail p {
  height: 81px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;

  color: #1c304b;
}
.conversion__detail button {
  width: 177px;
  height: 46px;
  left: 161px;
  margin-top: 10px;
  margin-bottom: 50px;
  background: #3366ff;
  border-radius: 42px;
  border: none;
  outline: none;
  color: #ffffff;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  text-transform: uppercase;
  overflow: hidden;
}
.img__wrapper {
  padding-top: 50px;
  padding-bottom: 10px;
  padding-right: 90px;
}
.img__wrapper .img__2 img {
  /* padding-left: 371px; */
  margin-bottom: -65px;
}
</style>

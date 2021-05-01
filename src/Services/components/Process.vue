<template>
  <div class="process__wrapper">
    <div class="process__content">
      <div class="process__detail">
        <h2>Our Process</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
      </div>
      <div class="image__wrapper">
        <div class="img">
          <img src="../assets/img/135.png" alt="" />
        </div>
        <div class="img__content">
          <p class="data">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <p class="data">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p class="data">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <p class="data">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p class="data">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
        <button>get started</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.process__content {
  text-align: center;
  padding-top: 60px;
}
.process__detail {
  text-align: -webkit-center;
}
.process__detail h2 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 53px;

  color: #1c304b;
}
.process__detail p {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;
  text-align: center;

  color: #6d6d6d;
}
.image__wrapper .img__content {
  display: flex;
  justify-content: center;
}
.image__wrapper button {
  width: 177px;
  height: 46px;
  outline: none;
  border: none;
  text-transform: uppercase;
  background: #3366ff;
  border-radius: 42px;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 50px;
}
.image__wrapper .data {
  width: 149px;

  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 19px;
  margin-top: 40px;
  padding-left: 10px;
  color: #6d6d6d;
}
.image__wrapper .img {
  width: 100%;
  margin-top: 50px;
}
</style>

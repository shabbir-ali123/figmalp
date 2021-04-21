<template>
  <div class="client__wrapper">
    <div class="client__content container">
      <h2>Some or our valued clients say</h2>
      <div class="clients__card">
        <div class="card__one">
          <h3>Unmatched customer support</h3>
          <div class="comma">
            <img src="../assets/img/col.png" alt="" />
            <img src="../assets/img/col.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do
            eiusmod tempor incididunt
          </p>
          <div class="logo">
            <img src="../assets/img/4.png" alt="" />
          </div>
        </div>
        <div class="card__two">
          <h3>Unmatched customer support</h3>
          <div class="comma">
            <img src="../assets/img/col.png" alt="" />
            <img src="../assets/img/col.png" alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do
            eiusmod tempor incididunt
          </p>
          <div class="logo">
            <img src="../assets/img/3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.client__content h2 {
  height: 53px;
  padding-top: 20px;
  text-align: center;
  /* left: 434px; */
  /* top: 2562px; */

  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 53px;

  color: #1c304b;
}
.clients__card {
  display: flex;
  padding-left: 180px;
  /* padding: 10px; */
}
.card__one {
  width: 502px;
  height: auto;
  /* margin-left: 170px; */
  background: #ffffff;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 100px;
}
.card__two {
  width: 502px;
  height: auto;
  /* margin-left: 170px; */
  background: #ffffff;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-top: 30px;
  margin-bottom: 100px;
  margin-left: 20px;
}

.comma {
  margin-left: 20px;
}
.logo {
  margin-top: 20px;
  padding-bottom: 20px;
  text-align: center;
}
h3 {
  text-align: center;
  padding-top: 30px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */

  text-transform: uppercase;

  color: #3366ff;
}
p {
  margin-left: 50px;
  width: 396px;
  height: 126px;
  margin-top: -25px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;

  color: #6d6d6d;
}
</style>

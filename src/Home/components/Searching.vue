<template>
  <div class="search__wrapper container">
    <div class="search__content">
      <div class="dots">
        <img class="one" src="../assets/img/25.png" alt="" srcset="" />
        <img class="two" src="../assets/img/25.png" alt="" srcset="" />
      </div>
      <h2>
        Your next customer is searching. <br />
        Make sure they find you.
      </h2>
      <button>Get started</button>
    </div>
    <img class="three" src="../assets/img/25.png" alt="" srcset="" />
  </div>
</template>
<style scoped>
.search__wrapper {
  height: auto;
  background-color: #3366ff;
}
.dots {
  display: flex;
  justify-content: space-between;
}
.dots .one {
  height: 30px;
  width: 124px;
  margin-left: 150px;
  margin-top: -25px;
}
.dots .two {
  height: 30px;
  width: 124px;
  margin-top: -25px;
  margin-right: 150px;
}
.three {
  margin-left: 430px;
}
.search__wrapper .search__content {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 50px;
}
.search__content h2 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 63px;
  /* or 157% */

  text-align: center;

  color: #ffffff;
}
.search__content button {
  background: #ffffff;
  border-radius: 45px;
  width: 177px;
  height: 46px;
  border: none;
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;

  color: #000000;
  cursor: pointer;
}
@media (max-width: 767px) and (min-width: 200px) {
  .three {
    margin-left: 60px;
  }
  .dots .one {
    padding-left: 10px;
    margin-left: 0px;
  }
  .dots .two {
    padding-right: 15px;
    margin-right: 0px;
  }
}
</style>

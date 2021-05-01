<template>
  <div class="work__wrapper">
    <div class="work__content container">
      <div class="work__detail">
        <h2>Work we’re proud of</h2>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Sed do eiusmod tempor incididunt
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
  justify-content: space-evenly;
  margin-top: 100px;
  padding-bottom: 100px;
}
.work__detail {
  padding-top: 80px;
  padding-left: 105px;
  /* margin-bottom: 90px; */
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
  display: flex;
  align-items: center;
  padding-top: 80px;
  width: 100%;
}
.work__img .img__one {
  margin-top: 20px;
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
  text-decoration: none;
  text-transform: uppercase;
  color: #3366ff;
}
@media (max-width: 1024px) {
  .work__content {
    flex-direction: column;
    align-items: center;
  }
  .work__content .work__img {
    margin-left: 0px;
    padding-top: 50px;
    padding-right: 0px;
  }
  .work__detail {
    padding-left: 0px;
  }
  .img__one img {
    width: 100%;
  }
  .img__two img {
    width: 100%;
  }
}
</style>

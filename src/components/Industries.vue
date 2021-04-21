<template>
  <div class="industry__wrapper">
    <div class="main__wrapper container">
      <div class="industry__content ">
        <h2>Industries we served</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
      <div class="case">
        <a href="#">case studies</a>
        <img src="../assets/img/13.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.industry__wrapper {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../assets/img/20.png");
  height: auto;
}
.industry__wrapper .main__wrapper {
  display: flex;
  justify-content: space-around;
  padding-bottom: 80px;
  margin-bottom: -33px;
}
.industry__wrapper .industry__content {
  padding-top: 300px;
  width: 450px;
  overflow: hidden;
}
.industry__content h2 {
  font-family: Segoe UI;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
}
.industry__content p {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;

  color: #ffffff;
}
.case {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  padding-top: 445px;
  display: flex;
  align-items: center;
  /* identical to box height */

  text-transform: uppercase;
}
.case a {
  color: #ffffff;
  text-decoration: transparent;
}
.case img {
  width: 30px;
  height: 30px;
  padding: 5px;
}
</style>

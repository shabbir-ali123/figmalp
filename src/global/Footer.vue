<template>
  <div class="footer__wrapper">
    <div class="footer__content">
      <div class="logo">
        <img src="./assets/img/brand.png" alt="" srcset="" />
      </div>
      <div class="pricing">
        <h3>Pricing Industries Served Case Studies Login</h3>
      </div>
      <div class="web">
        <h2>Web Design</h2>
        <h4>Sub-menu 1 Sub-menu 2 Sub-menu 3 Sub-menu 4 Sub-menu 5</h4>
      </div>
      <div class="web">
        <h2>Automation</h2>
        <h4>Sub-menu 1 Sub-menu 2 Sub-menu 3 Sub-menu 4 Sub-menu 5</h4>
      </div>
      <div class="option">
        <h2>SEO & Lead Generation</h2>
        <h4>Sub-menu 1 Sub-menu 2 Sub-menu 3 Sub-menu 4 Sub-menu 5</h4>
      </div>
      <div class="option">
        <h2>Social Media Marketing</h2>
        <h4>Sub-menu 1 Sub-menu 2 Sub-menu 3 Sub-menu 4 Sub-menu 5</h4>
      </div>
    </div>
    <div class="footer__root">
      <div class="root__content">
        <h3>
          © 2021 Digital Bolt Web Design, LLC. All rights reserved. | Privacy
          Policy
        </h3>
      </div>
      <div class="root__icon">
        <img src="./assets/img/fb.png" alt="" />
        <img src="./assets/img/twit.png" alt="" />
        <img src="./assets/img/insta.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer__content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 90px;
}
.footer__content {
  border-bottom: 1px solid #d8d8d8;
}
.web {
  padding-top: 55px;
  padding-bottom: 35px;
  padding-left: 25px;
}
.pricing {
  width: 138px;
  height: auto;
}
.pricing h3 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 30px;
  /* padding-bottom: 20px; */

  /* or 214% */

  text-transform: uppercase;

  color: #1c304b;
}
.logo {
  padding-bottom: 40px;
}
.web {
  width: 86px;
  height: auto;
}
h2 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  text-transform: uppercase;
}
.option {
  width: 95px;
  margin-top: 35px;
}
h4 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 26px;
  /* or 200% */

  color: #181818;
}

.footer__root {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 80px;
}
.root__content h3 {
  height: 24px;
  /* padding-bottom: 20px; */
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 24px;
  /* identical to box height, or 185% */

  color: #181818;
  padding-left: 85px;
}
.root__icon img {
  padding: 5px;
  margin-right: 35px;
}
@media (max-width: 1024px) {
  .footer__content {
    flex-wrap: wrap;
    padding-left: 0px;
  }
  .footer__content .option {
    padding-top: 0px;
  }
  .footer__root {
    padding-left: 0px;
    padding: 5px;
  }
  .root__content h3 {
    padding-left: 0px;
  }
  .root__icon {
    display: flex;
  }
  .root__icon img {
    margin-right: 0px;
    padding: 10px;
  }
}
</style>

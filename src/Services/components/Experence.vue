<template>
  <div class="experence__wrapper">
    <div class="experence__content">
      <h2>
        Provide a pleasant experience for your customers.
      </h2>
      <p>
        Do you have an idea for an app , online service , or product <br />
        you been dreaming of creating.
      </p>
    </div>
    <div class="main__wrapper">
      <div class="experence__card">
        <div class="cards" v-for="(card, index) in cards" :key="index">
          <div class="img">
            <img :src="card.image" alt="" />
          </div>
          <div class="card__content">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import One from "../assets/img/147.png";
import Two from "../assets/img/149.png";
import Three from "../assets/img/148.png";
export default {
  data() {
    return {
      cards: [
        {
          title: "We are different",
          description:
            "Unlike our competiors we build websites completely from scratch. Most web agencies create websites using platforms such as wordpress and resue the same template for every client meaning your websites look generic . We build websites coded from scratch meaning that we will build a website that is unique and highly customizable to your liking.",
          image: One,
        },
        {
          title: "Continuous improvement & maintenance ",
          description:
            "The web is always improving and new design trends , technogloy are always improving. With us  we make sure your website will look  the absoulte best and never dated. From now to 10 years in the future we update our sites regularly.",
          image: Two,
        },
        {
          title: "Lightning fast hosting",
          description:
            "Host every single website we design on powerful servers built  to handle hundreds of thousands for vistors. You can rest assured your website will be lightning fast all the time..",
          image: Three,
        },
      ],
    };
  },
};
</script>
<style scoped>
.experence__content {
  text-align: center;
  margin-top: 90px;
}
.main__wrapper {
  display: flex;
  justify-content: center;
}
.experence__content h2 {
  text-align: center;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 53px;

  color: #1c304b;
}
.experence__content p {
  height: 126px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;

  color: #6d6d6d;
}
.experence__card {
  /* top: 996px; */
  width: 900px;
  background: #ffffff;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.16);
}
.card__content {
  padding-left: 20px;
}
.experence__card .cards {
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;
  border-bottom: 1px solid #d9dde1;
}
.cards p {
  height: auto;
  left: 386px;
  top: 1088px;

  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;

  color: #6d6d6d;
}
.cards h2 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 24px;
  /* identical to box height, or 92% */

  color: #2b3945;
}
.cards .img {
  padding-left: 20px;
}
</style>

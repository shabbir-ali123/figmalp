<template>
  <div class="service__wrapper container">
    <div class="cards__wrapper ">
      <h2 class="heading">Explore our services</h2>
      <div class="card__content">
        <div class="card" v-for="(card, index) in cards" :key="index">
          <img class="data" :src="card.image" alt="" srcset="" />
          <h2 class="data">{{ card.title }}</h2>
          <hr class="data" />
          <p class="data">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import One from "../assets/img/card1.png";
import Two from "../assets/img/card2.png";
import Three from "../assets/img/card3.png";
import Four from "../assets/img/card4.png";
export default {
  data() {
    return {
      cards: [
        {
          title: "Web  Design",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          image: One,
        },
        {
          title: "Automation",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          image: Two,
        },
        {
          title: "SEO & Lead Generation",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          image: Three,
        },
        {
          title: "Social Media Marketing",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
          image: Four,
        },
      ],
    };
  },
};
</script>
<style scoped>
.cards__wrapper {
  margin-left: 95px;
}
.cards__wrapper .card {
  width: 250px;
  height: 327px;
  margin-left: 30px;
  /* border: 2px solid black; */
  border: 2px solid #d9dde1;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 20px;
  overflow: hidden;
}
hr {
  width: 46px;
  height: 2px;
  background-color: #3366ff;
  margin-right: 162px;
}
.card .data {
  margin-top: 30px;
}
.cards__wrapper .heading {
  text-align: center;
  font-family: Segoe UI;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: 0em;
  text-align: center;
}
.card__content {
  display: flex;
  /* margin-left: 78px; */
}
.card h2 {
  font-family: Segoe UI;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  padding-left: 30px;
  /* text-align: left; */
}
.card p {
  font-family: Segoe UI;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0em;
  padding-left: 30px;
}
.card img {
  padding-left: 28px;
}
</style>

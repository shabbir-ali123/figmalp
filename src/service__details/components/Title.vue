<template>
  <section class="title__wrapper ">
    <div
      v-for="(section, index) in sections"
      :key="index"
      :class="`title__content  ${section.bg || ''}`"
    >
      <div :class="`title__ratio ${section.direction || ''}`">
        <div class="img__wrapp">
          <img :src="section.image" alt="" />
        </div>
        <div class="title__data">
          <h2>{{ section.title }}</h2>
          <p>{{ section.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import one from "../assets/img/graph.jpg";
export default {
  data() {
    return {
      sections: [
        {
          title: "Info 1 title here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: one,
        },
        {
          title: "Info 2 title here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: one,
          direction: "row-reverse",
          bg: "white",
        },
        {
          title: "Info 3 title here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: one,
        },
        {
          title: "Info 4 title here",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: one,
          direction: "row-reverse",
          bg: "white",
        },
      ],
    };
  },
};
</script>
<style scoped>
.title__wrapper {
  width: 100%;
}
.title__ratio {
  display: flex;
  justify-content: space-around;
  padding-top: 100px;
  padding-bottom: 100px;
}
.title__ratio .title__wrapp{
  
}
.title__ratio img {
  padding-left:100px;
  margin-top: 50px;
  
}
.title__content .title__data {
  width: 100%;
  padding-left: 100px;
}
.title__data h2 {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 40px;
  /* identical to box height */

  color: #1c304b;
}
.title__data p {
  font-family: Segoe UI;
  font-style: normal;
  font-weight: 350;
  font-size: 20px;
  line-height: 27px;

  color: #6d6d6d;
}
.title__ratio.row-reverse {
  flex-direction: row-reverse;
  margin-right: 100px;
}
.title__ratio.row-reverse.img__wrapp img {
  width:100%;
  margin-right: 104px;
}
.title__content.white {
  background: #f9f9f9;
}
</style>

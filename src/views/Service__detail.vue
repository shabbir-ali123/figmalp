<template>
  <div id="Service__detail">
    <Details />
    <Title />
    <Blog />
    <Book />
  </div>
</template>
<script>
import Details from "../service__details/components/Details";
import Title from "../service__details/components/Title";
import Blog from "../Services/components/Blog";
import Book from "../Services/components/Book";
export default {
  name: "Service__detail",
  components: {
    Details,
    Title,
    Blog,
    Book,
  },
};
</script>

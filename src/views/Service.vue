<template>
  <div id="Service">
    <Conversion />
    <Experence />
    <Process />
    <Support />
    <Recent />
    <Blog />
    <Book />
  </div>
</template>
<script>
import Conversion from "../Services/components/Conversion";
import Experence from "../Services/components/Experence";
import Process from "../Services/components/Process";
import Support from "../Services/components/Support";
import Recent from "../Services/components/Recent";
import Blog from "../Services/components/Blog";
import Book from "../Services/components/Book";
export default {
  name: "Service",
  components: {
    Conversion,
    Experence,
    Process,
    Support,
    Recent,
    Blog,
    Book,
  },
};
</script>

<template>
  <section class="main">
    <start-menu/>
    <start-intro/>
    <carousel/>
  </section>
</template>

<script>
import Carousel from "@/components/Carousel";
import StartIntro from "@/components/StartIntro";
import StartMenu from "@/components/StartMenu";

export default {
  name: "StartScreen",
  components: {StartMenu, StartIntro, Carousel},
}
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.main {
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 64px 1fr 1fr;
}

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .main {
    height: 100vh;
    grid-template-columns: 1fr;
  }
}

// tablet
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .main {
    grid-template-columns: 86px 1fr;
    height: 100vh;
  }
}

</style>
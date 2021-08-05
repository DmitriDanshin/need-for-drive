<template>
  <nav-menu/>
  <section
      class="main"
      v-if="!isOrderPage"
  >
    <start-intro @make-order="toggleOrderPage"/>
    <carousel/>
  </section>
  <order-page v-if="isOrderPage"/>
</template>

<script>
import Carousel from "@/components/Carousel";
import StartIntro from "@/components/StartIntro";
import NavMenu from "@/components/NavMenu";
import OrderPage from "@/components/OrderPage";

export default {
  name: "StartScreen",
  components: {OrderPage, NavMenu, StartIntro, Carousel},
  data() {
    return {
      isOrderPage: false,
    };
  },
  methods: {
    toggleOrderPage() {
      this.isOrderPage = !this.isOrderPage;
    },
  },
};
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
  grid-template-columns: 1fr 1fr;
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
    grid-template-columns: 1fr;
    height: 100vh;
  }
}
</style>

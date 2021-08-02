<template>
  <div class="cars">
    <div><h1>Модель</h1></div>
    <order-card btn-text="Дополнительно" @next-page="nextPage" />
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";

export default {
  name: "OrderCars",
  components: { OrderCard },
  methods: {
    nextPage() {
      this.$emit("next-page");
    },
  },
};
</script>

<style scoped lang="scss">
.cars {
  padding-left: 128px;
  display: grid;
  grid-template-columns: 3fr auto;
  padding-top: 32px;
}
</style>

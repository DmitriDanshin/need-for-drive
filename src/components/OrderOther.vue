<template>
  <div class="other">
    <div><h1>Дополнительно</h1></div>
    <order-card
      btn-text="Итого"
      @next-page="nextPage"
    />
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";

export default {
  name: "OrderOther",
  components: {OrderCard},
  methods: {
    nextPage() {
      this.$emit("next-page");
    },
  },
};
</script>

<style scoped lang="scss">
.other {
  padding-left: 128px;
  display: grid;
  grid-template-columns: 3fr auto;
  padding-top: 32px;
}
</style>

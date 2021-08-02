<template>
  <div class="total">
    <div><h1>Итого</h1></div>
    <order-card :disabled="true" btn-text="Заказать" />
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";

export default {
  name: "OrderTotal",
  components: { OrderCard },
};
</script>

<style scoped lang="scss">
.total {
  padding-left: 128px;
  display: grid;
  grid-template-columns: 3fr auto;
  padding-top: 32px;
}
</style>

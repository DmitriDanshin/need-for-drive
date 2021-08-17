<template>
  <div class="total">
    <div class="total__wrapper">
      <div class="total__info">
        <div
          v-if="isDone"
          class="total__info__status"
        >
          Ваш заказ подтверждён
        </div>
        <div class="total__info__name">Hyndai, i30 N</div>
        <div class="total__info__license">K 761 HA 73</div>
        <div class="total__info__items">
          <div class="total__info__item">
            <div class="total__info__item__name">Топливо</div>
            <div class="total__info__item__value">100%</div>
          </div>
          <div class="total__info__item">
            <div class="total__info__item__name">Доступна с</div>
            <div class="total__info__item__value">12.06.2019 12:00</div>
          </div>
        </div>
      </div>
      <div class="total__car">
        <img
          src="../assets/cars/i30_n.png"
          alt="i30_n"
        />
      </div>
    </div>
    <order-card :btn-text="isDone ? 'Отменить' : 'Заказать'" />
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";
import { mapGetters } from "vuex";

export default {
  name: "OrderTotal",
  components: { OrderCard },
  computed: {
    ...mapGetters(["isDone"]),
  },
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.total {
  padding-left: 128px;
  display: grid;
  grid-template-columns: 3fr auto;
  padding-top: 32px;
  height: 75vh;
  overflow-y: hidden;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__car {
    margin-right: 192px;
  }

  &__info {
    display: flex;
    flex-direction: column;

    &__name {
      margin-top: 16px;
      @include text();
      font-size: 18px;
      color: $black;
    }

    &__status {
      @include text();
      font-size: 24px;
    }

    &__license {
      @include text();
      font-size: 14px;
      color: $black;
      width: 94px;
      height: 24px;
      border: 1px solid $gray;
      box-sizing: border-box;
      border-radius: 4px;
      padding: 4px;
      margin-top: 8px;
    }

    &__item {
      display: flex;
      align-items: center;
      margin-top: 8px;

      &__name {
        @include text();
        font-weight: 700;
        line-height: 16px;
        text-align: left;
      }

      &__value {
        margin-left: 5px;
        @include text();
      }
    }
  }
}

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .total {
    display: flex;
    flex-direction: column;
    padding: 64px 0 0;
    align-items: center;

    &__wrapper {
      flex-direction: column;
      padding-left: 128px;
      width: 100%;
    }

    &__car {
      margin-top: 8px;
      margin-right: 0;

      img {
        width: 80%;
      }
    }
  }
}

// tablet
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .total {
    display: flex;
    flex-direction: column;
    padding: 64px 0 0;
    align-items: center;
    overflow-y: hidden;

    &__wrapper {
      flex-direction: column;
      padding-left: 128px;
      width: 80%;
    }

    &__car {
      margin-top: 8px;
      margin-right: 0;

      img {
        width: 80%;
      }
    }
  }
}
</style>

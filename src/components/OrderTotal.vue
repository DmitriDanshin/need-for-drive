<template>
  <div class="total">
    <div class="total__wrapper">
      <div class="total__info">
        <div class="total__info__name">{{ car.name }}</div>
        <div class="total__info__license">{{ car.number }}</div>
        <div class="total__info__items">
          <div class="total__info__item">
            <div class="total__info__item__name">Топливо</div>
            <div class="total__info__item__value">{{ car.tank }} %</div>
          </div>
          <div class="total__info__item">
            <div class="total__info__item__name">Доступна с</div>
            <div class="total__info__item__value">{{ car.dateFrom }}</div>
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
    <order-card
      @open-popup="openPopup"
      btn-text="Заказать"
    />
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";
import {mapGetters} from "vuex";

export default {
  name: "OrderTotal",
  components: {OrderCard},
  methods: {
    openPopup() {
      this.$emit('open-popup');
    }
  },
  computed: {
    ...mapGetters(["car"])
  }
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
      @include text();
      font-size: 18px;
      color: $black;
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

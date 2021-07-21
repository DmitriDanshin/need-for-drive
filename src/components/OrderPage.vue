<template>
  <section class="order">
    <div class="order__header">
      <h2 class="order__header__title title fz-30">Need for drive</h2>
      <div class="order__header__city">
        <div class="order__header__city-icon">
          <v-svg name="city-icon" />
        </div>
        <span class="order__header__city-title">Ульяновск</span>
      </div>
    </div>
    <div class="order__nav">
      <div class="order__nav__item">
        <div class="order__nav__item__text order__nav__item__text-active">
          Местоположение
        </div>
        <v-svg name="next-arrow" />
      </div>
      <div class="order__nav__item">
        <div class="order__nav__item__text">Модель</div>
        <v-svg name="next-arrow" />
      </div>
      <div class="order__nav__item">
        <div class="order__nav__item__text">Дополнительно</div>
        <v-svg name="next-arrow" />
      </div>
      <div class="order__nav__item">
        <div class="order__nav__item__text">Итого</div>
        <v-svg name="next-arrow" />
      </div>
    </div>
    <order-location />
  </section>
</template>

<script>
import OrderLocation from "@/components/OrderLocation";
import VSvg from "@/components/v-svg";

export default {
  name: "OrderPage",
  components: { VSvg, OrderLocation },
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__header {
    padding: 32px 64px 32px 128px;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      color: $main-accent;
    }

    &__city {
      display: flex;
      align-items: center;

      &-icon {
        svg {
          height: 18px;
          width: 15px;
        }
        margin-right: 8px;
      }

      &-title {
        font-family: Roboto, serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: $gray;
      }
    }
  }

  &__nav {
    border-bottom: 1px solid #eeeeee;
    display: flex;
    padding: 8px 0 8px 128px;

    :last-child {
      svg {
        display: none;
      }
    }

    &__item {
      display: flex;
      align-items: center;

      svg {
        margin: 0 8px;
        height: 8px;
        width: 6px;
      }

      &__text {
        font-family: Roboto, serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: $gray;

        cursor: pointer;

        &-active {
          cursor: default;
          color: $main-accent;
        }
      }
    }
  }
}

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .order {
    overflow-y: scroll;

    &__header,
    &__nav {
      padding: 32px 64px 32px 64px;
    }

    &__nav {
      overflow-x: scroll;
    }
  }
}
</style>

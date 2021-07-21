<template>
  <section class="order">
    <div class="order__header">
      <h2 class="order__header__title title fz-30">Need for drive</h2>
      <div class="order__header__city">
        <div class="order__header__city-icon">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z"
              stroke="#999999"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z"
              stroke="#999999"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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

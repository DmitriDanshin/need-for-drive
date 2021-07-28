<template>
  <div :class="{ 'order-active': isMobileOrder }" class="order">
    <div class="order__title">Ваш заказ:</div>
    <div class="order__list">
      <div class="order__list__item">
        <div class="order__list__name">Пункт выдачи</div>
        <div class="order__list__dots"></div>
        <div class="order__list__value">Ульяновск, Нариманова 42</div>
      </div>
      <div class="order__list__item">
        <div class="order__list__name">Модель</div>
        <div class="order__list__dots"></div>
        <div class="order__list__value">Hyndai, i30 N</div>
      </div>
      <div class="order__list__item">
        <div class="order__list__name">Цвет</div>
        <div class="order__list__dots"></div>
        <div class="order__list__value">Голубой</div>
      </div>
      <div class="order__list__item">
        <div class="order__list__name">Длительность аренды</div>
        <div class="order__list__dots"></div>
        <div class="order__list__value">1д 2ч</div>
      </div>
      <div class="order__list__item">
        <div class="order__list__name">Полный бак</div>
        <div class="order__list__dots"></div>
        <div class="order__list__value">Да</div>
      </div>
    </div>
    <div class="order__price">
      <div><span>Цена:</span> от 8 000 до 12 000 ₽</div>
    </div>
    <div class="order__btn__wrapper">
      <button disabled class="order__btn">Выбрать модель</button>
    </div>
  </div>
  <div class="order__mobile">
    <button class="order__mobile__button" @click="toggleMobileOrder">
      Детали заказа
    </button>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
  data() {
    return {
      isMobileOrder: false,
    };
  },
  methods: {
    toggleMobileOrder() {
      this.isMobileOrder = !this.isMobileOrder;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.order {
  height: 100%;
  border-left: 1px solid $gray-light;
  padding-left: 32px;
  padding-right: 64px;
  padding-top: 32px;

  &__mobile {
    display: none;
    margin-top: 8px;
    z-index: 5;

    &__button {
      @include button();
      width: 100%;
      border-radius: 0;
    }
  }

  &__price {
    margin-top: 32px;

    @include text();
    font-weight: 400;
    font-size: 16px;
    color: $black;

    span {
      font-weight: 500;
    }
  }

  &__title {
    @include text();
    font-weight: 500;
    font-size: 18px;
    text-align: right;

    color: $black;
  }

  &__list {
    margin-top: 26px;

    &__item {
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__name {
      @include text();
    }

    &__dots {
      border-bottom: $gray 1px dotted;
      width: 50%;
    }

    &__value {
      @include text();
      text-align: right;
      color: $gray;
    }
  }

  &__btn {
    margin-top: 32px;
    @include button();
    width: 100%;
  }
}

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .order {
    display: flex;
    background-color: $white;
    align-items: center;
    flex-direction: column;
    padding: 12px 0 0;
    border: none;
    overflow: hidden;
    height: 0;
    transition: 1.5s ease;
    visibility: hidden;

    &-active {
      display: flex;
      overflow: auto;
      height: 100%;
      visibility: visible;
    }

    &__btn {
      &__wrapper {
        width: 100%;
      }
    }

    &__mobile {
      display: block;
    }

    &__title {
      text-align: left;
      padding-left: 12px;
    }

    &__price {
      padding-left: 12px;
    }

    &__list {
      margin-top: 8px;
      padding-right: 12px;
      padding-left: 12px;
    }
  }
}
</style>

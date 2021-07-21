<template>
  <div class="order">
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
    <button disabled class="order__btn">Выбрать модель</button>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.order {
  height: 100%;
  border-left: 1px solid #eeeeee;
  padding-left: 32px;
  padding-right: 64px;
  padding-top: 32px;

  &__price {
    margin-top: 32px;

    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;

    color: #121212;

    span {
      font-weight: 500;
    }
  }

  &__title {
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    text-align: right;

    color: #121212;
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
      font-family: Roboto, serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      color: $black;
      text-align: left;
    }

    &__dots {
      border-bottom: $gray 1px dotted;
      width: 50%;
    }

    &__value {
      font-family: Roboto, serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
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
    border: none;
  }
}
</style>

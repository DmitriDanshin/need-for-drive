<template>
  <div class="other">
    <div>
      <div class="other__color">
        <div class="other__title">Цвет</div>
        <div class="other__color__items">
          <div
              v-for="color in colors"
              :key="color.name"
              :class="{'active' : color.isActive}"
              class="other__color__item"
              @click="selectColor(color)"
          >
            <div class="other__color__title">{{ color.text }}</div>
            <input
                type="radio"
                name="color"
                :checked="color.isActive"
            />
          </div>
        </div>
      </div>

      <div class="other__date">
        <div class="other__title">Дата аренды</div>
        <div class="other__date__items">
          <span class="other__date__label">
           С
          </span>
          <input type="datetime-local">
          <div class="other__date__label">
            По
          </div>
          <input type="datetime-local">
        </div>
      </div>

      <div class="other__rate">
        <div class="other__title">Тариф</div>
        <div class="other__rate__items">
          <div
              class="other__rate__item "
              v-for="rate in rates"
              :key="rate.name"
              @click="selectRate(rate)"
          >
            <input
                :checked="rate.isActive"
                type="radio"
                name="rate"
            />
            <div
                :class="{'active': rate.isActive}"
                class="other__rate__title "
            >{{ rate.text }}
            </div>
          </div>

        </div>
      </div>

      <div class="other__services">
        <div class="other__title">Доп услуги</div>
        <div class="other__services__items">
          <div
              class="other__services__item"
              v-for="service in services"
              :key="service.id"
              @click="toggleService(service)"
          >
            <div
                :class="{'active': service.isActive}"
                class="other__services__title"
            >{{ service.text }}
            </div>
            <input
                type="checkbox"
                name="services"
                :checked="service.isActive"
            />
          </div>
        </div>
      </div>
    </div>
    <order-card/>
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";

export default {
  name: "OrderOther",
  components: {OrderCard},
  data() {
    return {
      colors: [
        {
          name: "red",
          text: "Красный",
          isActive: true
        },
        {
          name: "blue",
          text: "Голубой",
          isActive: false
        },
        {
          name: "any",
          text: "Любой",
          isActive: false
        }
      ],
      rates: [
        {
          name: "min",
          text: "Поминутно, 7₽/мин",
          isActive: true
        },
        {
          name: "day",
          text: "На сутки, 1999 ₽/сутки",
          isActive: false
        },
      ],
      services: [
        {
          id: 0,
          text: "Полный бак, 500р",
          isActive: false
        },
        {
          id: 1,
          text: "Детское кресло, 200р",
          isActive: false
        },
        {
          id: 2,
          text: "Правый руль, 1600р",
          isActive: false
        }
      ]
    };
  },
  methods: {
    selectColor(color) {
      const prevActiveColor = this.colors.find(c => c.isActive);
      prevActiveColor.isActive = false;
      const currentActiveColor = this.colors.find(c => c === color);
      currentActiveColor.isActive = true;
    },
    selectRate(rate) {
      const prevActiveRate = this.rates.find(c => c.isActive);
      prevActiveRate.isActive = false;
      const currentActiveRate = this.rates.find(c => c === rate);
      currentActiveRate.isActive = true;
    },
    toggleService(service) {
      const currentService = this.services.find(s => s === service);
      currentService.isActive = !currentService.isActive;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.other {
  padding-left: 128px;
  display: grid;
  grid-template-columns: 3fr auto;

  padding-top: 32px;

  &__title {
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: $black;
    margin-top: 32px;
  }

  &__color {
    display: flex;
    flex-direction: column;

    &__items {
      display: flex;
      align-items: center;
      margin-top: 18px;
    }

    input {
      border: 1px solid $gray;
      margin: 0 2px 0 0;

      &:checked {
        border: 3px solid $main-accent;
        box-shadow: $main-accent;
        appearance: none;
        border-radius: 100%;
        width: 12px;
        height: 12px;
        background-color: $white;
      }
    }

    .active {
      div {
        color: $black;
      }
    }

    &__item {
      margin-left: 16px;

      &:first-child {
        margin-left: 0;
      }

      display: flex;
      flex-direction: row-reverse;
    }

    &__title {
      font-family: Roboto, serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: $gray;
      cursor: default;
    }
  }

  &__date {
    &__items {
      margin-top: 32px;
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: 1fr 1fr;
      justify-content: start;
      align-items: end;
      column-gap: 16px;
      row-gap: 8px;

      input {
        width: 12rem;
        border: none;
        border-bottom: 1px solid #999999;
        outline: none;
        padding: 0 8px;
        margin: 0;

        &::-webkit-search-cancel-button {
          -webkit-appearance: none;
          height: 1em;
          width: 1em;
          border-radius: 50em;
          background: url(../assets/icons/search_close.svg) no-repeat 50% 50%;
          background-size: contain;
          opacity: 0;
          pointer-events: none;
        }

        &:focus::-webkit-search-cancel-button {
          opacity: 1;
          pointer-events: all;
        }
      }
    }

    &__label {
      @include text();
    }
  }

  &__rate {
    &__items {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      align-items: start;
    }

    &__title {
      @include text;
      color: $gray;
      font-weight: 400;
    }

    &__item {
      display: flex;
      cursor: default;

      .active {
        color: $black;
      }

      input {
        border: 1px solid $gray;

        &:checked {
          border: 3px solid $main-accent;
          box-shadow: $main-accent;
          appearance: none;
          border-radius: 100%;
          width: 12px;
          height: 12px;
          background-color: $white;
        }
      }
    }
  }

  &__services {
    &__items {
      margin-top: 16px;

      display: flex;
      flex-direction: column;
      align-items: start;
    }

    .active {
      color: $black;
    }

    &__title {
      color: $gray;
    }

    &__item {
      margin-top: 8px;
      display: flex;
      flex-direction: row-reverse;
      cursor: default;
      @include text();

      &:first-child {
        margin-top: 0;
      }

      input {
        width: 12px;
        height: 12px;
        appearance: none;
        border: 1px solid $gray;

        &:checked {

          border: 1px solid $main-accent;
          box-shadow: $main-accent;

          &:after {
            content: '\2714';
            display: inline-block;
            vertical-align: top;
            line-height: 0.75em;
            width: 1em;
            height: 1em;
            margin-right: 0.3em;
            text-align: center;
            color: $black;
          }
        }
      }
    }
  }
}

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .other {
    padding-left: 0;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      margin-top: 20px;
    }

    &__date {
      &__items {
        margin-top: 10px;
      }
    }

  }
}
</style>
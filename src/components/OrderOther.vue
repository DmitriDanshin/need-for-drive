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
              :checked="color.isActive"
              type="radio"
              name="color"
            />
          </div>
        </div>
      </div>

      <div class="other__date">
        <div class="other__title">Дата аренды</div>
        <div class="other__date__items">
          <div class="other__date__label">
            С
          </div>
          <date-picker
            mode="dateTime"
            v-model="range.start"
            color="green"
          >
            <template v-slot="{ inputValue, inputEvents }">
              <div>
                <input
                  :value="inputValue"
                  class="other__date__input"
                  v-on="inputEvents"
                />
              </div>
            </template>
          </date-picker>
          <div class="other__date__label">
            По
          </div>
          <date-picker
            v-model="range.end"
            mode="dateTime"
            color="green"
          >
            <template v-slot="{ inputValue, inputEvents }">
              <div>
                <input
                  :value="inputValue"
                  class="other__date__input"
                  v-on="inputEvents"
                />
              </div>
            </template>
          </date-picker>
        </div>
      </div>

      <div class="other__rate">
        <div class="other__title">Тариф</div>
        <div class="other__rate__items">
          <div
            v-for="rate in rates"
            :key="rate.name"
            class="other__rate__item "
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
            >
              {{ rate.text }}
            </div>
          </div>
        </div>
      </div>

      <div class="other__services">
        <div class="other__title">Доп услуги</div>
        <div class="other__services__items">
          <div
            v-for="service in services"
            :key="service.id"
            class="other__services__item"
            @click="toggleService(service)"
          >
            <div
              :class="{'active': service.isActive}"
              class="other__services__title"
            >
              {{ service.text }}
            </div>
            <input
              :checked="service.isActive"
              type="checkbox"
              name="services"
            />
          </div>
        </div>
      </div>
    </div>
    <order-card
      btn-text="Итого"
      @next-page="nextPage"
    />
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";
import {DatePicker} from 'v-calendar';

export default {
  name: "OrderOther",
  components: {OrderCard, DatePicker},
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
      ],
      range: {
        start: new Date(),
        end: new Date(),
      },
    };
  },
  methods: {
    selectColor(color) {
      this.colors.forEach((c) => c.isActive = false);
      const indexOfSelectedColor = this.colors.indexOf(color);
      color.isActive = true;
      this.colors.splice(indexOfSelectedColor, 1, color);
    },
    selectRate(rate) {
      this.rates.forEach((r) => r.isActive = false);
      const indexOfSelectedRate = this.rates.indexOf(rate);
      rate.isActive = true;
      this.rates.splice(indexOfSelectedRate, 1, rate);
    },
    toggleService(service) {
      const currentService = this.services.find(s => s === service);
      currentService.isActive = !currentService.isActive;
    },
    nextPage() {
      this.$emit("next-page");
    },
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
    }

    &__input {
      width: 12rem;
      border: none;
      border-bottom: 1px solid #999999;
      outline: none;
      padding: 0 8px;
      margin: 0;
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
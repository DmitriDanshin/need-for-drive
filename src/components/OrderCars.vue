<template>
  <div class="cars">
    <div>
      <div class="cars__select">
        <div
          v-for="carModel in carModels"
          :key="carModel.id"
          :class="{ active: carModel.isSelected }"
          class="cars__select__item"
        >
          <div class="cars__select__title">{{ carModel.title }}</div>
          <input
            type="radio"
            name="cars"
            @change="selectCarModel(carModel.id)"
          />
        </div>
      </div>
      <div class="cars__catalog">
        <div class="cars__catalog__item active">
          <div class="cars__catalog__item__title">ELANTRA</div>
          <div class="cars__catalog__item__price">12 000 - 25 000 ₽</div>
          <div class="cars__catalog__item__car">
            <img src="../assets/cars/elantra.png" alt="" />
          </div>
        </div>
        <div class="cars__catalog__item">
          <div class="cars__catalog__item__title">i30 N</div>
          <div class="cars__catalog__item__price">12 000 - 25 000 ₽</div>
          <div class="cars__catalog__item__car">
            <img src="../assets/cars/i30_n.png" alt="i30 N" />
          </div>
        </div>
        <div class="cars__catalog__item">
          <div class="cars__catalog__item__title">CRETA</div>
          <div class="cars__catalog__item__price">12 000 - 25 000 ₽</div>
          <div class="cars__catalog__item__car">
            <img src="../assets/cars/creta.png" alt="creta" />
          </div>
        </div>
        <div class="cars__catalog__item">
          <div class="cars__catalog__item__title">ELANTRA</div>
          <div class="cars__catalog__item__price">12 000 - 25 000 ₽</div>
          <div class="cars__catalog__item__car">
            <img src="../assets/cars/sonata.png" alt="" />
          </div>
        </div>
        <div class="cars__catalog__item">
          <div class="cars__catalog__item__title">SONATA</div>
          <div class="cars__catalog__item__price">12 000 - 25 000 ₽</div>
          <div class="cars__catalog__item__car">
            <img src="../assets/cars/sonata.png" alt="SONATA" />
          </div>
        </div>
      </div>
    </div>
    <order-card />
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";

export default {
  name: "OrderCars",
  components: { OrderCard },
  data() {
    return {
      carModels: [
        {
          isSelected: false,
          title: "Все модели",
          id: 0,
        },
        {
          isSelected: false,
          title: "Эконом",
          id: 1,
        },
        {
          isSelected: false,
          title: "Премиум",
          id: 2,
        },
      ],
      selectedModel: "",
    };
  },
  methods: {
    selectCarModel(id) {
      const prevSelect = this.carModels.find((model) => model.id === id);
      const currentSelect =
        this.carModels.find((model) => model.isSelected) ?? prevSelect;
      currentSelect.isSelected = false;
      prevSelect.isSelected = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.cars {
  padding-left: 128px;
  display: grid;
  grid-template-columns: 3fr auto;
  padding-top: 32px;

  &__select {
    display: flex;
    align-items: center;

    input {
      border: 1px solid $gray;
      margin: 1px 2px 0 0;
      padding: 0;

      &:checked {
        border: 3px solid $main-accent;
        box-shadow: $main-accent;
        appearance: none;
        border-radius: 100%;
        width: 12px;
        height: 12px;
        background-color: #fff;
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
    }
  }

  &__catalog {
    margin-top: 48px;
    display: grid;
    grid-template-columns: 368px 368px;

    .active {
      border: 1px solid $main-accent;
      cursor: default;

      &:hover {
        border: 1px solid $main-accent;
      }
    }

    &__item {
      border: 1px solid $gray-light;
      padding: 16px;
      display: flex;
      flex-direction: column;

      cursor: pointer;

      &__title {
        font-family: Roboto, serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        color: #121212;
      }

      &__price {
        font-family: Roboto, serif;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        color: $gray;
      }

      &__car {
        margin-top: 36px;
        justify-self: flex-end;
        align-self: flex-end;
      }

      &:hover {
        border: 1px solid $gray;
      }
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  .cars {
    grid-template-columns: 1fr;

    &__catalog {
      margin-top: 24px;
      display: grid;
      grid-template-columns: 1fr;
    }
  }
}
</style>

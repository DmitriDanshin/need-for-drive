<template>
  <div class="cars">
    <div
      v-if="isFail"
      class="title"
    >
      Не удалось подключиться к серверу.
    </div>
    <div v-if="!isFail">
      <div
        v-if="!isLoading"
        class="cars__select"
      >
        <div
          v-for="carCategory in carsCategories"
          :key="carCategory.id"
          :class="{ active: carCategory.id === selectedCarCategoryId }"
          class="cars__select__item"
        >
          <div class="cars__select__title">{{ carCategory.name }}</div>
          <input
            :checked="carCategory.id === selectedCarCategoryId"
            type="radio"
            name="cars"
            @change="selectCarCategory(carCategory.id)"
          />
        </div>
      </div>
      <div
        v-if="isLoading"
        class="title"
      >
        Загрузка...
      </div>
      <div class="cars__catalog">
        <div
          v-for="car in filteredCars"
          :key="car.id"
          :class="{ active: car.id === selectedCarId }"
          class="cars__catalog__item"
          @click="selectCar(car)"
        >
          <div class="cars__catalog__item__title">{{ car.name }}</div>
          <div class="cars__catalog__item__price">
            {{ car.priceMin }} - {{ car.priceMax }}₽
          </div>
          <div class="cars__catalog__item__car">
            <img
              :src="makeCarPath(car.thumbnail.path)"
              :alt="car.name"
            />
          </div>
        </div>
      </div>
    </div>
    <order-card
      btn-text="Дополнительно"
      @next-page="nextPage"
    />
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";
import {APIFactory} from "@/APIFactory";

export default {
  name: "OrderCars",
  components: {OrderCard},
  data() {
    return {
      carsCategories: [],
      selectedCarCategoryId: "",
      selectedCarId: "",
      cars: [],
      isLoading: true,
      isFail: false,
    };
  },
  async created() {
    const API = new APIFactory();
    try {
      const {data} = await API.getCars();
      this.cars = data;
      this.isLoading = false;
    } catch (e) {
      this.isFail = true;
      this.cars = [];
      this.isLoading = false;
    }
    try {
      const {data} = await API.getCarsCategories();
      this.carsCategories = data;
      this.selectedCarCategoryId = data[0].id;
      this.isLoading = false;
    } catch (e) {
      this.isFail = true;
      this.carsCategories = [];
      this.isLoading = false;
    }
  },
  methods: {
    nextPage() {
      this.$emit("next-page");
    },
    makeCarPath(path) {
      if (path.includes("data:image")) {
        return path;
      } else {
        return 'https://api-factory.simbirsoft1.com' + path;
      }
    },
    selectCarCategory(id) {
      this.selectedCarCategoryId = id;
    },
    selectCar(car) {
      this.selectedCarId = car.id;
      this.$store.commit("setItem", {
        name: "Модель",
        value: car.name,
      });
      this.$store.commit("setPrice", {
        priceMin: car.priceMin,
        priceMax: car.priceMax,
      });
      this.$store.commit("setCarData", {
        number: car.number,
        tank: car.tank,
        colors: car.colors,
      });
    },
  },
  computed: {
    filteredCars() {
      return this.cars.filter(
        (car) => car.categoryId?.id === this.selectedCarCategoryId
      );
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
      @include text();
      color: $gray;
    }
  }

  &__catalog {
    margin-top: 48px;
    display: grid;
    grid-template-columns: 368px 368px;
    padding-top: 15px;

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
        @include text();
        font-weight: normal;
        font-size: 18px;
        color: $black;
      }

      &__price {
        @include text();
        font-weight: normal;
        color: $gray;
      }

      &__car {
        margin-top: 36px;
        justify-self: flex-end;
        align-self: flex-end;

        img {
          width: 256px;
          height: 116px;
        }
      }

      &:hover {
        border: 1px solid $gray;
      }
    }
  }
}

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .cars {
    grid-template-columns: 1fr;
    padding-right: 0;
    padding-left: 0;
    overflow-y: auto;
    height: calc(100% - 190px - 10%);
    margin: 0;
    padding-top: 0;

    &__select {
      position: fixed;
      padding: 0 0 0 48px;
      width: 100%;
      border-right: none;
      border-left: none;
      border-top: $white 15px solid;
      border-bottom: $white 15px solid;
      background-color: $white;
      transform: translateY(-3px);
    }

    &__catalog {
      padding-top: 15px;
      margin-top: 44px;
      display: flex;
      flex-direction: column;
    }
  }
}

// tablet
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .cars {
    grid-template-columns: 1fr;
    padding-right: 0;
    padding-left: 0;
    overflow-y: auto;
    height: calc(100% - 190px - 10%);
    margin-left: 64px;

    padding-top: 0;

    &__select {
      position: fixed;
      padding: 0 0 0 48px;
      width: 100%;
      border-right: none;
      border-left: none;
      border-top: $white 15px solid;
      border-bottom: $white 15px solid;
      background-color: $white;
      transform: translateY(-3px);
    }

    &__catalog {
      padding-left: 30px;
      padding-right: 30px;
      margin-top: 44px;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

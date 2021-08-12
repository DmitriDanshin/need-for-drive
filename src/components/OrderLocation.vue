<template>
  <div class="location">
    <div class="map">
      <div class="map__search">
        <div class="map__search__label">
          <span>Город</span>
        </div>
        <div class="map__search__autocomplete">
          <input
            v-model="searchCity"
            placeholder="Начните вводить город ..."
            type="search"
            @focus="toggleCitiesFocus"
          />
          <div
            :class="{ active: filteredCities && citiesFocus }"
            class="map__search__autocomplete__list"
          >
            <div
              v-for="city in filteredCities"
              :key="city"
              class="map__search__autocomplete__item"
              @click="selectCity(city)"
            >
              {{ city.name }}
            </div>
          </div>
        </div>
        <div class="map__search__label">
          <span>Пункт выдачи</span>
        </div>
        <div class="map__search__autocomplete">
          <input
            v-model="searchPoint"
            placeholder="Начните вводить пункт ..."
            type="search"
            @focus="togglePointsFocus"
          />
          <div
            :class="{ active: filteredPoints && pointsFocus }"
            class="map__search__autocomplete__list"
          >
            <div
              v-for="point in filteredPoints"
              :key="point"
              class="map__search__autocomplete__item"
              @click="selectPoint(point)"
            >
              {{ point.address }}
            </div>
          </div>
        </div>
      </div>
      <div class="map__position">
        <div class="map__position__title">Выбрать на карте:</div>
        <div class="map__position__display">
          <img
            src="../assets/map.png"
            alt="map"
          />
        </div>
      </div>
    </div>
    <order-card
      :disabled="disabledButton"
      btn-text="Выбрать модель"
    />
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";
import { setItemInStore } from "@/components/mixins/setItemInStore";
import { APIFactory } from "@/APIFactory";

export default {
  name: "OrderLocation",
  components: { OrderCard },
  async created() {
    const API = new APIFactory();
    try {
      const { data } = await API.getCities();
      this.cities = data;
    } catch (e) {
      console.error(e);
      this.cities = [];
    }
    try {
      const { data } = await API.getPoints();
      this.points = data;
    } catch (e) {
      console.error(e);
      this.points = [];
    }
  },
  data() {
    return {
      searchPoint: "",
      citiesFocus: false,
      pointsFocus: false,
      searchCity: "",
      cities: [],
      points: [],
      selectedCity: {},
      disabledButton: true,
    };
  },
  methods: {
    toggleCitiesFocus() {
      this.citiesFocus = !this.citiesFocus;
    },
    togglePointsFocus() {
      this.pointsFocus = !this.pointsFocus;
    },

    selectCity(city) {
      this.searchCity = city.name;
      this.toggleCitiesFocus();
      setItemInStore(
        "Пункт выдачи",
        `${this.searchCity}, ${this.searchPoint}`,
        this
      );
      this.selectedCity = city;
    },
    selectPoint(point) {
      this.searchPoint = point.address;
      this.togglePointsFocus();
      setItemInStore(
        "Пункт выдачи",
        `${this.searchCity}, ${this.searchPoint}`,
        this
      );
      if (!this.isEmptyItems) {
        this.disabledButton = false;
      }
    },
  },
  computed: {
    isEmptyItems() {
      return this.selectedCity.length && this.searchPoint.length;
    },
    filteredCities() {
      return this.cities.filter((city) =>
        city.name?.toLowerCase().includes(this.searchCity.toLowerCase())
      );
    },
    filteredPoints() {
      return this.points.filter((point) => {
        return (
          point.address
            ?.toLowerCase()
            .includes(this.searchPoint.toLowerCase()) &&
          point.cityId?.id === this.selectedCity.id
        );
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.location {
  padding-left: 128px;
  display: grid;
  grid-template-columns: 3fr auto;
  padding-top: 32px;
  overflow-y: hidden;
}

.map {
  &__search {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 1fr 1fr;
    justify-content: start;
    align-items: end;
    column-gap: 16px;
    row-gap: 8px;

    &__autocomplete {
      position: relative;
      display: inline-block;

      .active {
        visibility: visible;
      }

      &__list {
        visibility: hidden;
        max-height: 106px;
        overflow-y: auto;
        z-index: 5;
        left: 0;
        width: 95%;
        position: absolute;
        background: $white;
        border: 1px solid $gray-light;
        padding: 8px 4px;

        &::-webkit-scrollbar {
          width: 6px;
        }

        &::-webkit-scrollbar-track {
          border: 1px solid $gray-light;
        }

        &::-webkit-scrollbar-thumb {
          width: 2px;
          height: 33px;
          background: $gray;
          border-radius: 2px;
        }
      }

      &__item {
        @include text();
        color: $gray;
        cursor: default;

        &:hover {
          color: $main-accent;
          cursor: pointer;
        }
      }
    }

    input {
      width: 12rem;
      border: none;
      border-bottom: 1px solid $gray;
      outline: none;
      padding: 0 8px;

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

    &__label {
      @include text();
      text-align: right;
    }
  }

  &__position {
    margin-top: 48px;
    display: flex;
    flex-direction: column;

    &__title {
      @include text();
      color: $black;
    }

    &__display {
      margin-top: 8px;
    }
  }
}

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .map {
    &__position {
      align-items: center;

      &__display {
        display: flex;
        justify-content: center;

        img {
          width: 100%;
        }
      }
    }

    &__search {
      justify-content: center;
    }
  }
  .location {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}

// tablet
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .location {
    display: flex;
    flex-direction: column;
  }
  .map {
    &__position {
      &__display {
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>

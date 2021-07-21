<template>
  <div class="location">
    <div class="map">
      <div class="map__search">
        <div class="map__search__label">
          <span>Город</span>
        </div>
        <div class="map__search__autocomplete">
          <input placeholder="Начните вводить город ..." type="search" />
          <div class="map__search__autocomplete__list">
            <div class="map__search__autocomplete__item">Уфа</div>
            <div class="map__search__autocomplete__item">Москва</div>
            <div class="map__search__autocomplete__item">Тюмень</div>
            <div class="map__search__autocomplete__item">Омск</div>
            <div class="map__search__autocomplete__item">Казань</div>
            <div class="map__search__autocomplete__item">Самара</div>
            <div class="map__search__autocomplete__item">Владивосток</div>
            <div class="map__search__autocomplete__item">Хабаровск</div>
            <div class="map__search__autocomplete__item">Томск</div>
          </div>
        </div>
        <div class="map__search__label">
          <span>Пункт выдачи</span>
        </div>
        <div class="map__search__autocomplete">
          <input placeholder="Начните вводить пункт ..." type="search" />
          <div class="map__search__autocomplete__list active">
            <div class="map__search__autocomplete__item">Уфа</div>
            <div class="map__search__autocomplete__item">Москва</div>
            <div class="map__search__autocomplete__item">Тюмень</div>
            <div class="map__search__autocomplete__item">Омск</div>
            <div class="map__search__autocomplete__item">Казань</div>
            <div class="map__search__autocomplete__item">Самара</div>
            <div class="map__search__autocomplete__item">Владивосток</div>
            <div class="map__search__autocomplete__item">Хабаровск</div>
            <div class="map__search__autocomplete__item">Томск</div>
          </div>
        </div>
      </div>
      <div class="map__position">
        <div class="map__position__title">Выбрать на карте:</div>
        <div class="map__position__display">
          <img src="../assets/map.png" alt="map" />
        </div>
      </div>
    </div>
    <order-card />
  </div>
</template>

<script>
import OrderCard from "@/components/OrderCard";

export default {
  name: "OrderLocation",
  components: { OrderCard },
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
  height: 100%;
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
        height: 106px;
        overflow-y: auto;
        z-index: 1;
        left: 0;
        width: 95%;
        position: absolute;
        background: #ffffff;
        border: 1px solid #eeeeee;
        padding: 8px 4px;

        &::-webkit-scrollbar {
          width: 6px;
        }

        &::-webkit-scrollbar-track {
          border: 1px solid #eeeeee;
        }

        &::-webkit-scrollbar-thumb {
          width: 2px;
          height: 33px;
          background: $gray;
          border-radius: 2px;
        }
      }

      &__item {
        font-family: Roboto, serif;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
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
      border-bottom: 1px solid #999999;
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
      text-align: right;
      font-family: Roboto, serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      color: $black;
    }
  }

  &__position {
    margin-top: 48px;
    display: flex;
    flex-direction: column;

    &__title {
      font-family: Roboto, serif;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;

      color: #121212;
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
      &__display {
        img {
          width: 100%;
        }
      }
    }
  }
  .location {
    padding-left: 64px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-right: 64px;
  }
}

// tablet
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .location {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-right: 64px;
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

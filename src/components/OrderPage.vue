<template>
  <div
    v-if="isPopupOpen"
    class="popup"
  >
    <div class="popup__bg"></div>
    <div class="popup__wrapper">
      <div class="popup__msg">Подтвердить заказ</div>
      <div class="popup__buttons">
        <button
          class="popup__button"
          @click="acceptOrder"
        >
          Подтвердить
        </button>
        <button
          class="popup__button"
          @click="togglePopup"
        >
          Вернуться
        </button>
      </div>
    </div>
  </div>
  <section class="order">
    <div class="order__header">
      <h2 class="order__header__title title fz-30">Need for drive</h2>
      <div class="order__header__city">
        <div class="order__header__city-icon">
          <v-svg name="city-icon"/>
        </div>
        <span class="order__header__city-title">Ульяновск</span>
      </div>
    </div>
    <div class="order__nav">
      <div
        v-for="page in pages"
        :key="page.id"
        class="order__nav__item"
      >
        <div
          :class="{
            'active': page.isActive,
            'done': page.isDone && !page.isActive,
          }"
          class="order__nav__item__text"
          @click="selectPage(page)"
        >
          {{ page.title }}
        </div>
        <v-svg name="next-arrow"/>
      </div>
    </div>
    <component
      :is="currentPage"
      @next-page="nextPage"
      @open-popup="togglePopup"
    />
  </section>
</template>

<script>
import OrderLocation from "@/components/OrderLocation";
import VSvg from "@/components/v-svg";
import OrderOther from "@/components/OrderOther";
import OrderCars from "@/components/OrderCars";
import OrderTotal from "@/components/OrderTotal";
import {mapMutations} from "vuex";

export default {
  name: "OrderPage",
  components: {OrderTotal, OrderCars, VSvg, OrderLocation, OrderOther},
  data() {
    return {
      isPopupOpen: false,
      pages: [
        {
          title: "Местоположение",
          pageName: "OrderLocation",
          id: 0,
          isActive: true,
          isDone: true,
        },
        {
          title: "Модель",
          pageName: "OrderCars",
          id: 1,
          isActive: false,
          isDone: false,
        },
        {
          title: "Дополнительно",
          pageName: "OrderOther",
          id: 2,
          isActive: false,
          isDone: false,
        },
        {
          title: "Итого",
          pageName: "OrderTotal",
          id: 3,
          isActive: false,
          isDone: false,
        },
      ],
      currentPage: "OrderLocation",
    };
  },
  methods: {
    ...mapMutations(['setOrderState']),
    selectPage(page) {
      if (page.isDone) {
        const activePage = this.pages.find((page) => page.isActive);
        this.currentPage = page.pageName;
        activePage.isActive = false;
        page.isActive = true;
      }
    },
    nextPage() {
      const currentPage = this.pages.find((page) => page.isActive);
      if (currentPage.id === this.pages.length - 1) {
        return;
      }

      currentPage.isActive = false;
      currentPage.isDone = true;

      const nextPage = this.pages.find(
        (page) => page.id === currentPage.id + 1
      );

      if (nextPage) {
        nextPage.isActive = true;
      }

      this.currentPage = nextPage.pageName;
    },
    togglePopup() {
      this.isPopupOpen = !this.isPopupOpen;
    },
    acceptOrder() {
      this.togglePopup();
      this.setOrderState({
        orderState: true
      });
    }
  },
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.popup {
  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__msg {
    margin-bottom: 150px;
    z-index: 6;
    @include text;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $white;
    opacity: 0.5;
    z-index: 5;
  }

  &__buttons {
    position: absolute;
    display: flex;
    z-index: 5;
  }

  &__button {
    @include button();
    margin-right: 10px;

    &:last-child {
      background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
    }
  }
}

.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &__header {
    padding: 32px 64px 32px 128px;
    z-index: 3;
    border-bottom: 1px solid $gray-light;
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
    border-bottom: 1px solid $gray-light;
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

      .active {
        cursor: default;
        color: $main-accent;
      }

      .done {
        cursor: pointer;
        color: $black;
      }

      &__text {
        @include text();
        font-weight: bold;
        color: $gray;
        cursor: not-allowed;
      }
    }
  }
}

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .popup {
    &__buttons {
      flex-direction: column;
    }

    &__button {
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 10px;
    }

    &__msg {
      margin-bottom: 180px;
    }
  }
  .order {
    height: 100%;
    overflow-y: hidden;

    &__header {
      padding: 32px 5px 24px 64px;
    }

    &__nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      padding-left: 12px;
      padding-right: 12px;

      &__item {
        &:nth-child(2n) {
          justify-content: flex-end;
        }

        svg {
          display: none;
        }
      }
    }
  }
}
</style>

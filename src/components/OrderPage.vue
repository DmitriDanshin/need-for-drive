<template>
  <section class="order">
    <div class="order__header">
      <h2 class="order__header__title title fz-30">Need for drive</h2>
      <div class="order__header__city">
        <div class="order__header__city-icon">
          <v-svg name="city-icon" />
        </div>
        <span class="order__header__city-title">Ульяновск</span>
      </div>
    </div>
    <div class="order__nav">
      <div v-for="page in pages" :key="page.id" class="order__nav__item">
        <div
          class="order__nav__item__text"
          :class="{
            active: page.isActive,
            done: page.isDone && !page.isActive,
          }"
          @click="selectPage(page)"
        >
          {{ page.title }}
        </div>
        <v-svg name="next-arrow" />
      </div>
    </div>
    <order-location v-if="currentPage === 'location'" @next-page="nextPage" />
    <order-cars v-else-if="currentPage === 'cars'" @next-page="nextPage" />
    <order-other v-else-if="currentPage === 'other'" @next-page="nextPage" />
    <order-total v-else />
  </section>
</template>

<script>
import OrderLocation from "@/components/OrderLocation";
import VSvg from "@/components/v-svg";
import OrderCars from "@/components/OrderCars";
import OrderOther from "@/components/OrderOther";
import OrderTotal from "@/components/OrderTotal";

export default {
  name: "OrderPage",
  components: { OrderTotal, OrderOther, OrderCars, VSvg, OrderLocation },
  data() {
    return {
      pages: [
        {
          title: "Местоположение",
          pageName: "location",
          id: 0,
          isActive: true,
          isDone: true,
        },
        {
          title: "Модель",
          pageName: "cars",
          id: 1,
          isActive: false,
          isDone: false,
        },
        {
          title: "Дополнительно",
          pageName: "other",
          id: 2,
          isActive: false,
          isDone: false,
        },
        {
          title: "Итого",
          pageName: "total",
          id: 3,
          isActive: false,
          isDone: false,
        },
      ],
      currentPage: "location",
    };
  },
  methods: {
    selectPage(page) {
      if (page.isDone) {
        const activePage = this.pages.find((page) => page.isActive);
        activePage.isActive = false;
        page.isActive = true;
      }
      this.currentPage = this.pages.find((page) => page.isActive).pageName;
    },
    nextPage() {
      const currentPage = this.pages.find((page) => page.isActive);
      if (currentPage.id === this.pages.length - 1) {
        return;
      }

      const currentPageId = currentPage.id;
      currentPage.isActive = false;
      currentPage.isDone = true;

      const nextPage = this.pages.find((page) => page.id === currentPageId + 1);
      nextPage.isActive = true;

      this.currentPage = nextPage.pageName;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &__header {
    padding: 32px 64px 32px 128px;
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
  .order {
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

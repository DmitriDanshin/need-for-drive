<template>
  <div class="intro">
    <div class="intro__top">
      <h2 class="intro__title title fz-30">Need for drive</h2>
      <div class="intro__city">
        <div class="intro__city-icon">
          <v-svg name="city-icon"/>
        </div>
        <span class="intro__city-title">Ульяновск</span>
      </div>
    </div>
    <div class="intro__center">
      <h2 class="title fz-70 intro__center__title">Каршеринг</h2>
      <h1 class="title fz-70 intro__center__title">Need for drive</h1>
      <h3 class="title fz-26 intro__center__title">
        Поминутная аренда авто твоего города
      </h3>
      <button
        class="intro__btn"
        @click="makeOrder"
      >Забронировать
      </button>
    </div>
    <div class="intro__bottom">
      <div class="intro__copyright">© 2016-2019 «Need for drive»</div>
      <div class="intro__phone">8 (495) 234-22-44</div>
    </div>
  </div>
</template>

<script>
import VSvg from "@/components/v-svg";

export default {
  name: "StartIntro",
  components: {VSvg},
  emits: ["make-order"],
  methods: {
    makeOrder() {
      this.$emit("make-order");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.intro {
  padding: 32px 128px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__btn {
    margin-top: 60px;
    @include button();
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    color: $main-accent;
  }

  &__city {
    display: flex;
    align-items: center;

    &-icon {
      margin-right: 8px;

      svg {
        height: 18px;
        width: 15px;
      }
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

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__copyright {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: $gray;
  }

  &__phone {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #121212;

    &:hover {
      color: $main-accent;
    }
  }

  &__center {
    display: flex;
    flex-direction: column;

    &__title + h1 {
      color: $main-accent;
      margin-top: 0;
    }

    &__title + h3 {
      padding: 0;
      margin: 0;
      font-style: normal;
      font-weight: 300;
      font-size: 26px;
      line-height: 30px;
      color: $gray;
    }
  }
}

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .intro {
    height: 100vh;
    justify-content: center;
    width: 100%;
    padding: 0;

    &:before {
      content: "";
      width: 100%;
      bottom: 0;
      right: 0;
      position: absolute;
      height: 12%;
      z-index: 0;
      background-color: $menu-color;
    }

    &__top {
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 16px;
    }

    &__phone {
      color: $main-accent;

      &:active {
        color: $white;
      }
    }

    &__bottom {
      position: fixed;
      flex-direction: column-reverse;
      justify-content: flex-end;
      align-items: flex-end;
      bottom: 16px;
      right: 16px;
      z-index: 1;
    }

    &__btn {
      width: 100%;
      height: 50px;
      border-radius: 0;
    }

    &__center {
      &__title {
        padding: 0 16px;
        font-size: 32px;
        margin: 0;

        & + h3 {
          margin-top: 16px;
          padding: 0 16px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>

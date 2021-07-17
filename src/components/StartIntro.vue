<template>
  <div class="intro">
    <div class="intro__top">
      <h2 class="intro__title title fz-30">Need for drive</h2>
      <div class="intro__city">
        <div class="intro__city-icon">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.0802 8.36364C16.0802 14.0909 8.54011 19 8.54011 19C8.54011 19 1 14.0909 1 8.36364C1 6.41068 1.7944 4.53771 3.20845 3.15676C4.62249 1.77581 6.54035 1 8.54011 1C10.5399 1 12.4577 1.77581 13.8718 3.15676C15.2858 4.53771 16.0802 6.41068 16.0802 8.36364Z"
                stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M8.5401 10.8182C9.9282 10.8182 11.0535 9.71925 11.0535 8.36364C11.0535 7.00803 9.9282 5.90909 8.5401 5.90909C7.15201 5.90909 6.02673 7.00803 6.02673 8.36364C6.02673 9.71925 7.15201 10.8182 8.5401 10.8182Z"
                stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="intro__city-title">Ульяновск</span>
      </div>
    </div>
    <div class="intro__center">
      <h2 class="title fz-70 intro__center__title">Каршеринг</h2>
      <h1 class="title fz-70 intro__center__title">Need for drive</h1>
      <h3 class="title fz-26 intro__center__title">Поминутная аренда авто твоего города</h3>
      <button class="intro__btn">Забронировать</button>
    </div>
    <div class="intro__bottom">
      <div class="intro__copyright">© 2016-2019 «Need for drive»</div>
      <div class="intro__phone">8 (495) 234-22-44</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartIntro"
}
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
    color: #999999;
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
      content: '';
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
        color: #FFF;
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
<template>
  <section>
    <div class="menu">
      <div @click="openMenu()" class="menu__hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu__lang">Eng</div>
    </div>
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
      <div class="intro__bottom__wrapper">
        <div class="intro__bottom">
          <div class="intro__copyright">&#169; 2016-2019 «Need for drive»</div>
          <div class="intro__phone">8 (495) 234-22-44</div>
        </div>
      </div>
    </div>
    <div class="carousel"></div>
  </section>
</template>

<script>
import {ref} from 'vue';

export default {
  name: "StartScreen",
  setup() {
    const isMenuOpen = ref(true);
    const openMenu = () => {
      isMenuOpen.value = true;
    }
    return {
      isMenuOpen, openMenu
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";

.menu {
  position: absolute;
  width: 64px;
  height: 100%;
  left: 0;
  top: 0;
  background: $menu-color;

  &__lang {

    position: absolute;
    width: 23px;
    height: 16px;
    bottom: 36px;
    left: 50%;
    transform: translateX(-50%);

    font-family: Roboto, serif;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;

    color: $main-accent;

    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  }

  &__hamburger {
    display: flex;
    align-items: center;
    position: fixed;
    top: 20px;
    left: 20px;
    width: 24px;
    height: 32px;
    cursor: pointer;
    z-index: 1;

    & > span, > span::before, > span::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background-color: #ffffff;
      border-radius: 2rem;
    }

    & > span::before {
      content: '';
      top: -8px;
    }

    & > span::after {
      content: '';
      top: 8px;
    }
  }
}

.intro {
  height: 100%;
  display: flex;
  flex-direction: column;

  &__btn {
    height: 48px;
    width: 250px;

    border-radius: 8px;

    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #FFFFFF;

    background: linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%);
    background-blend-mode: darken;

    border: none;
  }

  &__top {
    display: flex;
    margin-right: 688px;
    justify-content: space-around;
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


    &__wrapper {

      position: absolute;
      bottom: 36px;
      left: 64px;
    }

    display: flex;
    margin-left: 64px;
    margin-right: 688px;
    justify-content: space-around;
    align-items: center;
  }

  &__copyright {

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    /* identical to box height */

    /* Gray */
    color: #999999;


  }

  &__phone {

    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    margin-left: 284px;
    color: #121212;
  }

  &__center {

    margin-top: 100px;
    display: flex;
    margin-left: 128px;
    margin-right: 688px;
    flex-direction: column;

    &__title + h1 {
      color: $main-accent;
      margin-top: 4px;
      margin-bottom: 0;
    }


    &__title + h3 {
      font-style: normal;
      font-weight: 300;
      font-size: 26px;
      line-height: 30px;
      color: $gray;
      margin-top: 34px;
    }
  }

}

.carousel {
  position: absolute;
  width: 688px;
  height: 100%;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  mix-blend-mode: normal;

}
</style>
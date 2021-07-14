<template>
  <section class="main">
    <div v-if="isMenuOpen" class="menu__bg"></div>
    <div class="menu">

      <div @click="isMenuOpen = !isMenuOpen" class="menu__hamburger" :class="{'menu__hamburger-active' : isMenuOpen}">
        <span></span>
      </div>
      <div class="menu__lang">Eng</div>
      <div :class="{'menu__hidden': !isMenuOpen}" class="menu__full">

        <div class="menu__items">
          <ul>
            <li class="menu__item">ПАРКОВКА</li>
            <li class="menu__item active">СТРАХОВКА</li>
            <li class="menu__item">БЕНЗИН</li>
            <li class="menu__item">ОБСЛУЖИВАНИЕ</li>
          </ul>
        </div>
      </div>
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
      <div class="intro__bottom">
        <div class="intro__copyright">© 2016-2019 «Need for drive»</div>
        <div class="intro__phone">8 (495) 234-22-44</div>
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

.main {
  height: 100vh;
  display: grid;
  grid-template-columns: 64px 1fr 1fr;
}

.menu {
  width: 64px;
  background: $menu-color;
  position: relative;
  z-index: 3;

  &__bg {
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    animation: fade-in 2s;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    background: rgba(21, 27, 31, 0.81);
  }

  &__items {
    margin-top: 307px;
    margin-left: 128px;

    ul {
      list-style-type: none;
    }

  }

  &__item {
    font-family: Roboto, serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    text-align: left;
    color: #FFF;

    & + .active {
      color: $main-accent;
    }
  }

  &__full {
    top: 0;
    left: 0;
    position: absolute;

    background: $menu-color;
    width: 1500%;
    height: 100%;
    transition: 1s ease-in-out;

  }

  &__hidden {
    transition: 1s ease-in-out;
    left: -1500%;
  }


  &__lang {

    position: absolute;
    width: 23px;
    height: 16px;
    bottom: 36px;
    left: 21px;

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
    position: absolute;
    top: 20px;
    left: 20px;
    width: 24px;
    height: 32px;
    cursor: pointer;
    z-index: 3;

    & > span, > span::before, > span::after {
      transition-duration: .25s;
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

    &-active {
      & > span {
        transform: rotate(45deg);
      }

      & > span::before {
        top: 0;
        transform: rotate(0);
      }

      & > span::after {
        top: 0;
        transform: rotate(90deg);
      }

      & {
        visibility: visible;

        left: 20px;
      }
    }
  }
}

.intro {
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
    margin-top: 60px;
    border: none;
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
  }

  &__center {
    display: flex;
    flex-direction: column;

    &__title + h1 {
      color: $main-accent;
      margin-top: 4px;
    }

    &__title + h3 {
      margin-top: 34px;
      font-style: normal;
      font-weight: 300;
      font-size: 26px;
      line-height: 30px;
      color: $gray;
    }
  }
}

.carousel {
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  mix-blend-mode: normal;

}
</style>
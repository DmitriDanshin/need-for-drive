<template>
  <section class="main">
    <div v-if="isMenuOpen" class="menu__bg"></div>
    <div class="menu">

      <div @click="isMenuOpen = !isMenuOpen" class="menu__hamburger" :class="{'menu__hamburger-active' : isMenuOpen}">
        <span></span>
      </div>
      <div class="menu__lang">
        <div content="menu__lang__round">Eng</div>
      </div>
      <div :class="{'menu__hidden': !isMenuOpen}" class="menu__full">
        <div class="menu__items">
          <ul>
            <li class="menu__item">ПАРКОВКА</li>
            <li class="menu__item active">СТРАХОВКА</li>
            <li class="menu__item">БЕНЗИН</li>
            <li class="menu__item">ОБСЛУЖИВАНИЕ</li>
          </ul>
          <div class="menu__social">
            <div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46563 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z"
                    fill="white"/>
              </svg>
            </div>
          </div>
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
    <div class="carousel">
      <div class="carousel__slides">
        <div class="carousel__wrapper">
          <div class="slide-left">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1 10L9 19" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
          <div></div>
          <div class="slide-right">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L9 10L1 19" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="slide slide-active">
          <div class="slide__wrapper">
            <div class="slide__content">
              <h3 class="title fz-40 slide__content-title">Бесплатная парковка</h3>
              <div class="slide__content-descr">Оставляйте машину на платных городских парковках и разрешенных местах,
                не нарушая ПДД, а также в аэропортах.
              </div>
              <button class="slide__content-btn">Подробнее</button>

              <div class="dots">
                <div class="dot dot-active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
          </div>
          <img class="slide__image" src="../assets/slides/parking.jpg" alt="parking">
        </div>
        <div class="slide">
          <img class="slide__image" src="../assets/slides/insurance.jpg" alt="insurance">
        </div>
        <div class="slide">
          <img class="slide__image" src="../assets/slides/gas.jpg" alt="gas">
        </div>
        <div class="slide">
          <img class="slide__image" src="../assets/slides/service.jpg" alt="service">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {ref} from 'vue';

export default {
  name: "StartScreen",
  setup() {
    const isMenuOpen = ref(false);
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
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 64px 1fr 1fr;
}

.menu {
  width: 64px;
  background: $menu-color;
  position: relative;
  z-index: 4;

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
    z-index: 4;
    background: rgba(21, 27, 31, 0.81);
  }

  &__items {
    margin-top: 307px;
    margin-left: 128px;

    ul {
      list-style-type: none;
      padding: 0;
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
    width: calc(50vw + 36px);
    height: 100%;
    transition: 1s ease-in-out;

  }

  &__hidden {
    transition: 1s ease-in-out;
    left: calc(-50vw - 36px);
  }


  &__lang {

    cursor: pointer;

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

    text-align: center;

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

.dots {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;

  .dot {
    width: 8px;
    height: 8px;
    background: #EEEEEE;
    margin: 0 5px;
    border-radius: 100%;
    cursor: pointer;

    &-active {
      cursor: default;
      background: $main-accent;
    }
  }
}

.carousel {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__slides {
    height: 100%;
    position: relative;

    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      opacity: 0.8;
    }
  }

  &__wrapper {
    position: absolute;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 64px 1fr 64px;
    top: 0;
    left: 0;
  }

  .slide {
    display: none;

    &__wrapper {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 3;
    }

    &__content {
      justify-content: center;
      align-items: center;
      width: 75%;
      z-index: 0;

      &-title {
        font-style: normal;
        font-weight: 500;
        color: #FFF;
      }

      &-descr {
        font-family: Roboto, serif;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        color: #EEEEEE;
      }

      &-btn {

        margin-top: 32px;
        font-family: Roboto, serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        color: #EEEEEE;

        height: 48px;
        width: 164px;
        border-radius: 4px;
        border: none;

        background: linear-gradient(90deg, #13493F 0%, #0C7B1B 100%);

      }
    }

    &-left, &-right {
      width: 100%;
      height: 100%;
      background: $black;
      opacity: 0.2;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 4;

      &:hover {
        background: $main-accent;
      }
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &-active {
      height: 100%;
      display: block;
    }
  }
}

@media (max-width: 768px) {

  .main {
    height: 100vh;
    grid-template-columns: 1fr;
  }

  .intro {
    height: 100vh;

    &:before {
      content: '';
      width: 100%;
      bottom: 0;
      right: 0;
      position: absolute;
      height: 15%;
      z-index: 0;
      background-color: $black;
    }

    &__top {
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 16px;
    }
  }

  .menu {
    width: 0;
    height: 100vh;
    position: fixed;

    &__lang {
      position: absolute;
      z-index: 2;
      bottom: 10%;
    }

    &__items {
      margin-top: 150px;
      margin-left: 28px;
    }

    &__bg {
      display: none;
    }

    &__hamburger {
      & > span, > span::before, > span::after {
        background-color: $black;
      }

      &-active {
        & > span, > span::before, > span::after {
          background-color: #FFF;
        }
      }
      top: 6%;
      left: 20px;
    }

    &__hidden {
      transition: 1s ease-in-out;
      left: calc(-100vw);
    }

    &__full {
      width: 100vw;
    }
  }

  .carousel {
    visibility: hidden;
  }

  .intro {
    padding: 0;
    justify-content: start;

    &__phone {
      color: $main-accent;
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

    h1 {
      margin: 0;
    }

    &__center {
      &__title {
        padding: 0 16px;
        font-size: 32px;

        & + h3 {
          margin-top: 16px;
          padding: 0 16px;
          font-size: 18px;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .carousel__wrapper {
    grid-template-columns: 32px 1fr 32px;
  }
  .carousel {
    height: 100%;
  }

}

</style>
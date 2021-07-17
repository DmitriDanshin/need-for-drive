<template>
  <div v-if="isMenuOpen" class="menu__bg"></div>
  <div class="menu">
    <div @click="isMenuOpen = !isMenuOpen" class="menu__hamburger" :class="{'menu__hamburger-active' : isMenuOpen}">
      <span></span>
    </div>
    <div class="menu__lang" :class="{'menu__lang-hidden': !isMenuOpen}">
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
</template>

<script>
import {ref} from "vue";

export default {
  name: "StartMenu",
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
@import "../scss/mixins";

.menu {
  width: 64px;
  background: $menu-color;
  position: relative;
  z-index: 4;
  display: flex;
  padding: 36px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

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

    width: 24px;
    height: 32px;
    cursor: pointer;
    z-index: 3;

    & > span, > span::before, > span::after {
      width: 24px;
      transition-duration: .25s;
      display: block;
      position: absolute;
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

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .menu {
    background-color: rgba(0, 0, 0, 0);
    height: 100vh;
    position: fixed;

    &__lang {
      z-index: 3;
      position: fixed;
      bottom: 28px;

      &-hidden {
        visibility: hidden;
      }
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
    }

    &__hidden {
      transition: 1s ease-in-out;
      left: calc(-100vw);
    }

    &__full {
      width: 100vw;
    }
  }
}

// tablet
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .menu {
    width: 100%;

    &__full {
      width: calc(100vw + 86px);
      height: 100%;
    }

    &__hidden {
      transition: 1s ease-in-out;
      left: calc(-100vw - 86px);
    }
  }
}
</style>
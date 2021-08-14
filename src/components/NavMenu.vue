<template>
  <div
    v-if="isMenuOpen"
    class="menu__bg"
  ></div>
  <div class="menu">
    <div
      :class="{ 'menu__hamburger-active': isMenuOpen }"
      class="menu__hamburger"
      @click="toggleMenu"
    >
      <span></span>
    </div>
    <div class="menu__lang__circle">
      <div
        :class="{ 'menu__lang-hidden': !isMenuOpen }"
        class="menu__lang"
      >
        Eng
      </div>
    </div>
    <div
      :class="{ menu__hidden: !isMenuOpen }"
      class="menu__full"
    >
      <div class="menu__items">
        <ul>
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.id"
            class="menu__item"
          >
            {{ menuItem.title }}
          </li>
        </ul>
        <div class="menu__social">
          <v-svg name="facebook"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VSvg from "@/components/v-svg";

export default {
  name: "NavMenu",
  components: {VSvg},
  data() {
    return {
      isMenuOpen: false,
      menuItems: [
        {
          isActive: true,
          title: "ПАРКОВКА",
          id: 0,
        },
        {
          isActive: false,
          title: "СТРАХОВКА",
          id: 1,
        },
        {
          isActive: false,
          title: "БЕНЗИН",
          id: 2,
        },
        {
          isActive: false,
          title: "ОБСЛУЖИВАНИЕ",
          id: 3,
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";
@import "../scss/mixins";

.menu {
  width: 64px;
  background: $menu-color;

  position: fixed;
  height: 100%;
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

  &__social {
    svg {
      width: 32px;
      height: 32px;
    }
  }

  &__item {
    font-family: Roboto, serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    text-align: left;
    color: $white;

    &:hover {
      cursor: pointer;
      color: $main-accent;
    }

    & + .active {
      color: $main-accent;
    }
  }

  &__full {
    top: 0;
    left: 0;
    position: absolute;

    background: $menu-color;
    width: calc(50vw);
    height: 100%;
    transition: 1s ease-in-out;
  }

  &__hidden {
    transition: 1s ease-in-out;
    left: calc(-50vw);
  }

  &__lang {
    cursor: default;

    font-family: Roboto, serif;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;

    text-align: center;

    color: $main-accent;

    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    &:active {
      color: $main-accent;
    }

    &__circle {
      margin-bottom: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border-radius: 100%;

      &:hover {
        border: 2px solid $white;
      }

      &:hover {
        div {
          color: $white;
        }
      }
    }
  }

  &__hamburger {
    display: flex;
    align-items: center;

    width: 24px;
    height: 32px;
    cursor: pointer;
    z-index: 3;

    & > span,
    > span::before,
    > span::after {
      width: 24px;
      transition-duration: 0.25s;
      display: block;
      position: absolute;
      height: 0.2rem;
      background-color: $white;
      border-radius: 2rem;
    }

    & > span::before {
      content: "";
      top: -8px;
    }

    & > span::after {
      content: "";
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

      &__circle {
        border: none;
      }

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
      & > span,
      > span::before,
      > span::after {
        background-color: $black;
      }

      &-active {
        & > span,
        > span::before,
        > span::after {
          background-color: $white;
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
    width: 86px;

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

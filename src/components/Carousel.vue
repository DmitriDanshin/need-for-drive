<template>
  <div class="carousel">
    <div class="carousel__slides">
      <div class="carousel__wrapper">
        <div class="slide-left">
          <v-svg name="left-arrow"></v-svg>
        </div>
        <div></div>
        <div class="slide-right">
          <v-svg name="right-arrow"></v-svg>
        </div>
      </div>
      <div class="slide slide-active">
        <div class="slide__wrapper">
          <div class="slide__content">
            <h3 class="title fz-40 slide__content-title">
              Бесплатная парковка
            </h3>
            <div class="slide__content-descr">
              Оставляйте машину на платных городских парковках и разрешенных
              местах, не нарушая ПДД, а также в аэропортах.
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
        <img
          class="slide__image"
          src="../assets/slides/parking.jpg"
          alt="parking"
        />
      </div>
      <div class="slide">
        <img
          class="slide__image"
          src="../assets/slides/insurance.jpg"
          alt="insurance"
        />
      </div>
      <div class="slide">
        <img class="slide__image" src="../assets/slides/gas.jpg" alt="gas" />
      </div>
      <div class="slide">
        <img
          class="slide__image"
          src="../assets/slides/service.jpg"
          alt="service"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VSvg from "@/components/v-svg";

export default {
  name: "Carousel",
  components: { VSvg },
};
</script>

<style scoped lang="scss">
@import "../scss/variables";
@import "../scss/helpers";
@import "../scss/fonts";

.carousel {
  display: flex;
  flex-direction: column;
  height: 100vh;

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
      background: $gray-light;
      margin: 0 5px;
      border-radius: 100%;
      cursor: pointer;

      &-active {
        cursor: default;
        background: $main-accent;
      }
    }
  }

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
        color: $white;
      }

      &-descr {
        font-family: Roboto, serif;
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        color: $gray-light;
      }

      &-btn {
        margin-top: 32px;
        font-family: Roboto, serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        color: $gray-light;

        height: 48px;
        width: 164px;
        border-radius: 4px;
        border: none;

        background: linear-gradient(90deg, #13493f 0%, #0c7b1b 100%);
      }
    }

    &-left,
    &-right {
      width: 100%;
      height: 100%;
      background: $black;
      opacity: 0.2;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 4;

      svg {
        height: 18px;
        width: 8px;
      }

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

// mobile
@media screen and (min-width: 320px) and (max-width: 767px) {
  .carousel {
    visibility: hidden;
  }
}

// tablet
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .carousel {
    display: none;
  }
}

// desktop min
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .carousel__wrapper {
    grid-template-columns: 32px 1fr 32px;
  }
  .carousel {
    height: 100%;
  }
}
</style>

<template>
  <div
    class="carousel"
    @mouseenter="stopSlideShow"
    @mouseleave="continueSlideShow"
  >
    <div class="carousel__slides">
      <div class="carousel__wrapper">
        <div
          class="slide-left"
          @click="prevSlide"
        >
          <v-svg name="left-arrow"/>
        </div>
        <div></div>
        <div
          class="slide-right"
          @click="nextSlide"
        >
          <v-svg name="right-arrow"/>
        </div>
      </div>

      <div class="dots">
        <div
          v-for="dot in sliders"
          :class="{ 'dot-active': dot.isActive }"
          :key="dot.id"
          class="dot"
          @click="selectSlide(dot.id)"
        ></div>
      </div>

      <div
        :class="{ 'slide-active': slide.isActive }"
        v-for="slide in sliders"
        :key="slide.id"
        class="slide"
      >
        <div class="slide__wrapper">
          <div class="slide__content">
            <h3 class="title fz-40 slide__content-title">{{ slide.title }}</h3>
            <div class="slide__content-descr">{{ slide.body }}</div>
            <button class="slide__content-btn">Подробнее</button>
          </div>
        </div>
        <img
          :src="slide.src"
          :alt="slide.alt"
          class="slide__image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import VSvg from "@/components/v-svg";

export default {
  name: "Carousel",
  components: {VSvg},
  setup() {
    const SLIDE_DELAY = 5000;
    const sliders = ref([
      {
        id: 0,
        src: require("../assets/slides/parking.jpg"),
        alt: "parking",
        title: "Бесплатная парковка",
        body: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах",
        isActive: true,
      },
      {
        id: 1,
        src: require("../assets/slides/insurance.jpg"),
        alt: "insurance",
        title: "Страховка",
        body: "Полная страховка страховка автомобиля",
        isActive: false,
      },
      {
        id: 2,
        src: require("../assets/slides/gas.jpg"),
        alt: "gas",
        title: "Бензин",
        body: "Полный бак на любой заправке города за наш счёт",
        isActive: false,
      },
      {
        id: 3,
        src: require("../assets/slides/service.jpg"),
        alt: "service",
        title: "Обслуживание",
        body: "Автомобиль проходит еженедельное ТО",
        isActive: false,
      },
    ]);

    let autoSlideShow = setInterval(() => {
      nextSlide();
    }, SLIDE_DELAY);

    const stopSlideShow = () => {
      clearInterval(autoSlideShow);
    };

    const continueSlideShow = () => {
      autoSlideShow = setInterval(() => {
        nextSlide();
      }, SLIDE_DELAY);
    };

    const selectSlide = (id) => {
      const activeSlide = sliders.value.find((slider) => slider.isActive);
      activeSlide.isActive = false;

      const selectedSlide = sliders.value.find((slider) => slider.id === id);
      selectedSlide.isActive = true;
    };

    const nextSlide = () => {
      stopSlideShow();

      const activeSlide = sliders.value.find((slider) => slider.isActive);
      const nextSlide = sliders.value.find(
        (slider) => slider.id === activeSlide.id + 1
      );

      activeSlide.isActive = false;
      if (nextSlide) {
        nextSlide.isActive = true;
      } else {
        const firstSlide = sliders.value.find((slider) => slider.id === 0);
        firstSlide.isActive = true;
      }
    };

    const prevSlide = () => {
      stopSlideShow();

      const activeSlide = sliders.value.find((slider) => slider.isActive);
      const prevSlide = sliders.value.find(
        (slider) => slider.id === activeSlide.id - 1
      );

      activeSlide.isActive = false;
      if (prevSlide) {
        prevSlide.isActive = true;
      } else {
        const firstSlide = sliders.value.find(
          (slider) => slider.id === sliders.value.length - 1
        );
        firstSlide.isActive = true;
      }
    };

    return {
      sliders,
      stopSlideShow,
      nextSlide,
      prevSlide,
      selectSlide,
      continueSlideShow,
    };
  },
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
    z-index: 4;

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

    @keyframes fade {
      from {
        opacity: 0.9;
      }
      to {
        opacity: 1;
      }
    }

    &-active {
      height: 100%;
      display: block;
      animation: 1s linear fade;
    }

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
        width: 8px;
        height: 16px;
      }

      &:hover {
        background: $main-accent;
      }
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: rgba(0, 0, 0, 0.3);
      filter: brightness(60%);
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

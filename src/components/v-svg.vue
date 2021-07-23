<template>
  <svg>
    <use :href="src"></use>
  </svg>
</template>

<script>
export default {
  name: "v-svg",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      return require("../assets/sprite.svg") + `#${this.name}`;
    },
  },
};
</script>

<style scoped></style>

<template>
  <start-screen/>
</template>

<script>

import StartScreen from "@/components/StartScreen";

export default {
  name: 'App',
  components: {
    StartScreen,
  }
}
</script>

<style>

html {
  height: 100%
}

body {
  overflow: hidden;

  margin: 0;
  padding: 0;
}
</style>

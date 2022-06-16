<template>
  <div id="app">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

import TheMain from "@/components/TheMain.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheFooter,
    TheMain,
    TheHeader,
  },
};
</script>

<style lang="scss">
.container {
  &-lg,
  &-md {
    @apply mx-auto px-6;
  }

  &-lg {
    @apply max-w-screen-2xl;
  }

  &-md {
    @apply max-w-screen-xl;
  }
}
</style>

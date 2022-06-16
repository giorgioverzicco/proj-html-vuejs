<template>
  <header>
    <HeaderTop />
    <HeaderBody />
    <HeaderBottom />
  </header>
</template>

<script>
import HeaderTop from "@/components/HeaderTop.vue";
import HeaderBody from "@/components/HeaderBody.vue";
import HeaderBottom from "@/components/HeaderBottom.vue";

export default {
  name: "TheHeader",
  components: {
    HeaderBottom,
    HeaderBody,
    HeaderTop,
  },
};
</script>

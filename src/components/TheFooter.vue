<template>
  <footer class="divide-y-2 divide-neutral-200 divide-opacity-10">
    <FooterTop />
    <FooterBottom />
  </footer>
</template>

<script>
import FooterTop from "@/components/FooterTop.vue";
import FooterBottom from "@/components/FooterBottom.vue";
export default {
  name: "TheFooter",
  components: { FooterBottom, FooterTop },
};
</script>

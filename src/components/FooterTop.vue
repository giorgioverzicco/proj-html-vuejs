<template>
  <div class="bg-secondary text-white">
    <div class="container-md flex gap-x-24 py-14">
      <FooterTopLeft class="w-1/2" />
      <FooterTopRight class="w-1/2" />
    </div>
  </div>
</template>

<script>
import FooterTopLeft from "@/components/FooterTopLeft.vue";
import FooterTopRight from "@/components/FooterTopRight.vue";

export default {
  name: "FooterTop",
  components: { FooterTopRight, FooterTopLeft },
};
</script>

<template>
  <div class="border-b border-b-neutral-200">
    <div
      class="container-lg flex items-center justify-between py-3 text-sm text-secondary-900"
    >
      <HeaderTopLeft />
      <HeaderTopRight />
    </div>
  </div>
</template>

<script>
import HeaderTopLeft from "@/components/HeaderTopLeft.vue";
import HeaderTopRight from "@/components/HeaderTopRight.vue";

export default {
  name: "HeaderTop",
  components: { HeaderTopLeft, HeaderTopRight },
};
</script>

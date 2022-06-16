<template>
  <div class="flex gap-x-12">
    <FooterSocialSection class="w-1/2" />
    <FooterDiscountSection class="w-1/2" />
  </div>
</template>

<script>
import FooterSocialSection from "@/components/FooterSocialSections.vue";
import FooterDiscountSection from "@/components/FooterDiscountSection.vue";

export default {
  name: "FooterTopRight",
  components: { FooterDiscountSection, FooterSocialSection },
};
</script>

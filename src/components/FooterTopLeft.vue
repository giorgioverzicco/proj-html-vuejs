<template>
  <div class="flex gap-x-12">
    <FooterAboutSection class="w-1/2" />
    <FooterContactSection class="w-1/2" />
  </div>
</template>

<script>
import FooterAboutSection from "@/components/FooterAboutSection.vue";
import FooterContactSection from "@/components/FooterContactSection.vue";
export default {
  name: "FooterTopLeft",
  components: { FooterContactSection, FooterAboutSection },
};
</script>

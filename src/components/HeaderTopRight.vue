<template>
  <div class="flex gap-x-8">
    <NavBar />
    <SocialBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SocialBar from "@/components/SocialBar.vue";

export default {
  name: "HeaderTopRight",
  components: { NavBar, SocialBar },
};
</script>

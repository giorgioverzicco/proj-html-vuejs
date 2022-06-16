<template>
  <div class="flex gap-x-5">
    <AppButton class="text-secondary">
      <FontAwesomeIcon icon="fa-solid fa-bullhorn" class="text-accent" />
      <span>Become an Instructor</span>
    </AppButton>

    <AppButton class="text-secondary">
      <FontAwesomeIcon icon="fa-solid fa-briefcase" class="text-accent" />
      <span>For Enterprise</span>
    </AppButton>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "HeaderBodyAffiliate",
  components: { AppButton },
};
</script>

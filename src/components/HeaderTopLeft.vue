<template>
  <div>
    <AppButton>
      <span>English</span>
      <FontAwesomeIcon icon="fa-solid fa-chevron-down" class="fa-xs" />
    </AppButton>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "HeaderTopLeft",
  components: { AppButton },
};
</script>

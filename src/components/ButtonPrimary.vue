<template>
  <AppButton
    class="rounded-full bg-primary px-8 py-3 font-semibold uppercase text-white shadow-md transition-all duration-500 hover:translate-y-0.5 hover:bg-primary-900 hover:shadow-none"
  >
    <slot />
  </AppButton>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "ButtonPrimary",
  components: { AppButton },
};
</script>

<template>
  <form class="flex w-full">
    <input
      type="text"
      placeholder="Search courses"
      class="w-full bg-ice-900 px-3 py-2 placeholder:text-neutral-500"
    />

    <AppButton class="bg-accent px-4 py-3 text-white">
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </AppButton>
  </form>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "SearchForm",
  components: { AppButton },
};
</script>

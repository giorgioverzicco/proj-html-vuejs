<template>
  <div class="flex flex-grow items-center gap-x-3">
    <AppButton class="text-sm font-semibold uppercase text-neutral-500">
      <FontAwesomeIcon icon="fa-solid fa-bars" />
      <span>Category</span>
    </AppButton>

    <SearchForm />
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import SearchForm from "@/components/SearchForm.vue";

export default {
  name: "HeaderBodySearch",
  components: { SearchForm, AppButton },
};
</script>

<template>
  <div class="bg-secondary">
    <div
      class="container-lg flex items-center justify-center gap-x-14 py-7 text-white"
    >
      <AppButton
        v-for="(category, idx) in categories"
        :key="idx"
        tag="a"
        :href="category.url"
      >
        <FontAwesomeIcon :icon="category.icon" class="fa-lg" />
        <span>{{ category.name }}</span>
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "HeaderBottom",
  components: { AppButton },
  data() {
    return {
      categories: [
        {
          url: "#",
          name: "Business",
          icon: "fa-solid fa-chart-simple",
        },
        {
          url: "#",
          name: "Design",
          icon: "fa-solid fa-palette",
        },
        {
          url: "#",
          name: "Development",
          icon: "fa-solid fa-gear",
        },
        {
          url: "#",
          name: "Lifestyle",
          icon: "fa-regular fa-face-smile",
        },
        {
          url: "#",
          name: "Office Productivity",
          icon: "fa-solid fa-wallet",
        },
      ],
    };
  },
};
</script>

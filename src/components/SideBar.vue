<template>
  <div class="absolute bg-transparent top-0 right-0 h-full">
    <div
      class="sticky top-1/2 z-10 flex w-[48px] -translate-y-1/2 flex-col items-center gap-y-5 bg-white py-5 text-neutral-500 shadow-[2px_0_20px_rgba(0,0,0,0.2)]"
    >
      <AppButton
        v-for="(link, idx) in links"
        :key="idx"
        tag="a"
        :href="link.url"
      >
        <FontAwesomeIcon :icon="link.icon" class="fa-lg" />
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
  name: "SideBar",
  components: { AppButton },
  data() {
    return {
      links: [
        {
          url: "#",
          icon: "fa-solid fa-desktop",
        },
        {
          url: "#",
          icon: "fa-solid fa-life-ring",
        },
        {
          url: "#",
          icon: "fa-solid fa-wrench",
        },
        {
          url: "#",
          icon: "fa-solid fa-cart-shopping",
        },
        {
          url: "#",
          icon: "fa-solid fa-mobile-screen",
        },
      ],
    };
  },
};
</script>

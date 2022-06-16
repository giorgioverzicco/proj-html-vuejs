<template>
  <div>
    <div class="container-lg flex items-center gap-x-14 py-5 text-secondary">
      <AppLogo />
      <HeaderBodySearch />
      <HeaderBodyAffiliate />
      <HeaderBodyUser />
    </div>
  </div>
</template>
<script>
import AppLogo from "@/components/AppLogo.vue";
import HeaderBodyAffiliate from "@/components/HeaderBodyAffiliate.vue";
import HeaderBodySearch from "@/components/HeaderBodySearch.vue";
import HeaderBodyUser from "@/components/HeaderBodyUser.vue";

export default {
  name: "HeaderBody",
  components: {
    AppLogo,
    HeaderBodyAffiliate,
    HeaderBodySearch,
    HeaderBodyUser,
  },
};
</script>

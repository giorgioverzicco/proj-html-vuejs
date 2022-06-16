<template>
  <section>
    <div class="mb-5 text-xl font-semibold uppercase">
      <slot name="header" />
    </div>

    <div class="text-sm">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

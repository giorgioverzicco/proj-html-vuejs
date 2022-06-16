<template>
  <div class="flex w-full flex-col">
    <slot name="image" />

    <div class="flex flex-grow flex-col p-5">
      <slot name="header" />
      <slot />
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppCard",
};
</script>

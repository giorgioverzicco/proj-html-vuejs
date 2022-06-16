<template>
  <component :is="tag" class="flex items-center gap-x-2 text-center">
    <slot />
  </component>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    tag: {
      type: String,
      default: "button",
    },
  },
};
</script>

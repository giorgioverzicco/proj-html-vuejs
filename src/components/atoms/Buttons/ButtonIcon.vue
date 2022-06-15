<template>
  <component :is="tag" class="flex items-center gap-x-2">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'ButtonIcon',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
  },
}
</script>

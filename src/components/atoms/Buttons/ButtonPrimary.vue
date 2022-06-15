<template>
  <component :is="tag" class="btn-primary">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.btn-primary {
  @apply -translate-y-0.5
  rounded-full
  bg-cube-coral-red
  px-6
  py-3
  font-semibold
  uppercase
  text-white
  shadow-md
  transition-all
  duration-500
  hover:translate-y-0
  hover:bg-median-amaranth
  hover:shadow-none;
}
</style>

<template>
  <a
    href="#"
    class="grid place-items-center rounded-full"
    :style="`width: ${width}px; height: ${height}px`"
  >
    <FontAwesomeIcon :icon="icon" :class="`fa-${iconSize}`" />
  </a>
</template>

<script>
export default {
  name: "ButtonSocial",
  props: {
    width: {
      type: Number,
      default: 52,
    },
    height: {
      type: Number,
      default: 52,
    },
    icon: {
      type: String,
      required: true,
    },
    iconSize: {
      type: String,
      default: "2xl",
    },
  },
};
</script>

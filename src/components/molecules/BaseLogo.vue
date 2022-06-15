<template>
  <div>
    <a :href="url">
      <img src="@/assets/img/logo.svg" alt="Master Study Logo" />
    </a>
  </div>
</template>
<script>
export default {
  name: 'BaseLogo',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

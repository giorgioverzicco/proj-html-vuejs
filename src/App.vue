<template>
  <div id="app">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader'
import TheFooter from '@/components/layout/TheFooter'
import TheMain from '@/components/layout/TheMain'
export default {
  name: 'App',
  components: { TheMain, TheFooter, TheHeader },
}
</script>

<style>
.container-lg {
  @apply w-full px-4 lg:px-0 lg:max-w-screen-xl;
}

.container-md {
  @apply w-full px-4 lg:px-0 lg:max-w-screen-lg;
}
</style>

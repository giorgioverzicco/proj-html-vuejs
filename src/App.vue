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
  @apply w-full md:w-10/12;
}

.container-md {
  @apply w-full md:w-8/12;
}
</style>

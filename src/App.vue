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
  @apply mx-auto max-w-[1640px] px-6;
}

.container-md {
  @apply mx-auto max-w-[1366px] px-6;
}
</style>

<template>
  <div id="app">
    <TheHeader />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader'
import TheFooter from '@/components/layout/TheFooter'
export default {
  name: 'App',
  components: { TheFooter, TheHeader },
}
</script>
